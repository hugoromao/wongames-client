import { QUERY_GAMES } from 'graphql/queries/games'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { initializeApollo } from 'utils/apollo'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      start: 0
    }
  })

  return {
    props: {
      revalidate: 60,
      initialApoloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
