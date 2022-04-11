import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: {
              // Don't cache separate results based on
              // any of this field's arguments.
              keyArgs: ['where', 'sort'],

              // Concatenate the incoming list items with
              // the existing list items.
              merge: (existing = [], incoming) => {
                console.log(existing, incoming.data)
                // eslint-disable-next-line no-unsafe-optional-chaining
                return [...existing, ...incoming.data]
              }
            }
          }
        }
      }
    })
  })
}

export function initializeApollo(initialState = null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
