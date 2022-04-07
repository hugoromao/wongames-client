import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      items: itemsMock,
      cards: cardsMock,
      total: 'R$F 430,00',
      recommendedGames:
        data.recommended?.data?.attributes?.section.games?.data.map((game) => ({
          title: game.attributes?.name,
          slug: game.attributes?.slug,
          developer:
            game.attributes?.developers?.data[0]?.attributes?.name || null,
          img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
          price: game.attributes?.price
        })),
      recommendedHighlight: {
        title: data.recommended?.data?.attributes?.section.highlight?.title,
        subtitle:
          data.recommended?.data?.attributes?.section.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${data.recommended?.data?.attributes?.section.highlight?.background.data?.attributes?.url}`,
        buttonLabel:
          data.recommended?.data?.attributes?.section.highlight?.buttonLabel,
        buttonLink:
          data.recommended?.data?.attributes?.section.highlight?.buttonLink
      }
    }
  }
}
