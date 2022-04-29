import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrdersListProps = {
  items?: OrderProps[]
}

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      Meus pedidos
    </Heading>

    {items.length ? (
      items.map((order) => {
        return order.games.map((game) => (
          <GameItem key={order.id} {...game} paymentInfo={order.paymentInfo} />
        ))
      })
    ) : (
      <Empty
        title="Seu carrinho está vazio"
        description="Volte para a loja e explore ótimos jogos e ofertas."
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
