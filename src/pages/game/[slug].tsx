import Game, { GameTemplateProps } from 'templates/Game'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { GetStaticProps } from 'next'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

// gerar em build time

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { pagination: { limit: 9 } }
  })

  const paths = data.games?.data.map(({ attributes }) => ({
    params: {
      slug: attributes?.slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      filters: {
        slug: { contains: `${params?.slug}` }
      }
    }
  })

  if (!data.games?.data.length) {
    return { notFound: true }
  }

  const game = data.games.data[0]

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.src}`,
      gameInfo: {
        title: game.attributes?.name,
        price: game.attributes?.price,
        description: game.attributes?.short_description
      },
      gallery: game.attributes?.gallery?.data.map((image) => ({
        src: `http://localhost:1337${image.attributes?.src}`,
        label: image.attributes?.label
      })),
      description: game.attributes?.description,
      details: {
        developer: game.attributes?.developers?.data[0].attributes?.name,
        releaseDate: game.attributes?.release_date,
        platforms: game.attributes?.platforms?.data.map(
          (platform) => platform.attributes?.name
        ),
        publisher: game.attributes?.publisher?.data?.attributes?.name,
        rating: game.attributes?.rating,
        genres: game.attributes?.categories?.data.map(
          (category) => category.attributes?.name
        )
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
