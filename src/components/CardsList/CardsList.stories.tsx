import { Story, Meta } from '@storybook/react'
import CardsList, { CardListProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
