import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockGame,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
