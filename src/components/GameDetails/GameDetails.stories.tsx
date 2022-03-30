import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Action', 'Survival']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
