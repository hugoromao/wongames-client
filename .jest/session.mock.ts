// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
const session = { jwt: '123123', user: { email: 'lucas.cdsilva@gmail.com' } }
useSession.mockImplementation(() => [session])
