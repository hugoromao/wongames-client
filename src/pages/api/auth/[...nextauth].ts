import NextAuth, { NextAuthOptions } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Sing-in',
      credentials: {},
      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams(credentials)
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, user, token }) => {
      session.jwt = token?.jwt
      session.id = token?.id

      return Promise.resolve(session)
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user?.id
        token.email = user?.email
        token.name = user?.name
        token.jwt = user?.jwt
      }
      return Promise.resolve(token)
    }
  }
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
