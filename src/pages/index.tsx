import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    }
  })

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
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.data?.attributes?.popularGames?.highlight?.title || '',
        subtitle:
          sections?.data?.attributes?.popularGames?.highlight?.subtitle || '',
        backgroundImage:
          `http://localhost:1337${sections?.data?.attributes?.popularGames?.highlight?.background.data?.attributes?.url}` ||
          '',
        buttonLabel:
          sections?.data?.attributes?.popularGames?.highlight?.buttonLabel ||
          '',
        buttonLink:
          sections?.data?.attributes?.popularGames?.highlight?.buttonLink || '',
        alignment:
          sections?.data?.attributes?.popularGames?.highlight?.alignment ||
          'right'
      },
      mostPopularGames:
        sections?.data?.attributes?.popularGames?.games?.data.map((game) => ({
          title: game.attributes?.name,
          slug: game.attributes?.slug,
          developer:
            game.attributes?.developers?.data[0]?.attributes?.name || null,
          img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
          price: game.attributes?.price
        })),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcomingGames: upcomingGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer:
          game.attributes?.developers?.data[0]?.attributes?.name || null,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      upcomingHighlight: {
        title:
          sections?.data?.attributes?.upcomingGames?.highlight?.title || '',
        subtitle:
          sections?.data?.attributes?.upcomingGames?.highlight?.subtitle || '',
        backgroundImage:
          `http://localhost:1337${sections?.data?.attributes?.upcomingGames?.highlight?.background.data?.attributes?.url}` ||
          '',
        floatImage:
          `http://localhost:1337${sections?.data?.attributes?.upcomingGames?.highlight?.floatImage?.data?.attributes?.url}` ||
          '',
        buttonLabel:
          sections?.data?.attributes?.upcomingGames?.highlight?.buttonLabel ||
          '',
        buttonLink:
          sections?.data?.attributes?.upcomingGames?.highlight?.buttonLink ||
          '',
        alignment:
          sections?.data?.attributes?.upcomingGames?.highlight?.alignment ||
          'right'
      },
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: freeGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer:
          game.attributes?.developers?.data[0]?.attributes?.name || null,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      freeHighlight: {
        title: sections?.data?.attributes?.freeGames?.highlight?.title || '',
        subtitle:
          sections?.data?.attributes?.freeGames?.highlight?.subtitle || '',
        backgroundImage:
          `http://localhost:1337${sections?.data?.attributes?.freeGames?.highlight?.background.data?.attributes?.url}` ||
          '',
        buttonLabel:
          sections?.data?.attributes?.freeGames?.highlight?.buttonLabel || '',
        buttonLink:
          sections?.data?.attributes?.freeGames?.highlight?.buttonLink || '',
        alignment:
          sections?.data?.attributes?.freeGames?.highlight?.alignment || 'right'
      }
    }
  }
}
