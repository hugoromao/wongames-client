import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming {
    upcomingGames: games(pagination: { limit: 8 }) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
