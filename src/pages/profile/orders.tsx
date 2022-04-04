import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

import mock from 'components/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      {console.log(items)}
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: mock
    }
  }
}
