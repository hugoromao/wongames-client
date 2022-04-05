import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames($pagination: PaginationArg!) {
    games(pagination: $pagination) {
      data {
        attributes {
          name
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          price
        }
      }
    }
  }
`
