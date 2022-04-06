import Home, { HomeTemplateProps } from 'templates/Home'

import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const {
    data: { banners, newGames }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners?.data.map((banner) => ({
        img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,
        buttonLabel: banner.attributes?.button?.label,
        buttonLink: banner.attributes?.button?.link,
        ...(banner.attributes?.ribbon && {
          ribbon: banner.attributes?.ribbon?.text || null,
          ribbonColor: banner.attributes?.ribbon?.color || null,
          ribbonSize: banner.attributes?.ribbon?.size || null
        })
      })),
      newGames: newGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer:
          game.attributes?.developers?.data[0]?.attributes?.name || null,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      mostPopularHighlight: highlightsMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightsMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightsMock
    }
  }
}
