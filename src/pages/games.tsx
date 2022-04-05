import { QUERY_GAMES } from 'graphql/queries/games'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'

import { initializeApollo } from 'utils/apollo'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: {
      pagination: {
        limit: 9
      }
    }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.data.map((game: unknown) => ({
        title: game.attributes.name,
        developer: game.attributes.developers[0]?.data.attributes.name || null,
        img: `http://localhost:1337${game.attributes.cover.data.attributes.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.attributes.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
