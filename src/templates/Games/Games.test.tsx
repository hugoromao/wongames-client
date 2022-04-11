import { MockedProvider } from '@apollo/client/testing'

import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { QUERY_GAMES } from 'graphql/queries/games'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: {
                limit: 15,
                start: 0
              }
            },
            result: {
              data: {
                games: {
                  data: [
                    {
                      attributes: {
                        name: 'Cyberpunk 2077',
                        slug: 'cyberpunk-2077',
                        cover: {
                          data: {
                            attributes: {
                              url: '/uploads/cyberpunk_2077_125afc9aee.jpg'
                            }
                          }
                        },
                        developers: {
                          data: [
                            {
                              attributes: {
                                name: 'CD PROJEKT RED'
                              }
                            }
                          ]
                        },
                        price: 199.9
                      }
                    }
                  ]
                }
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    // expect(await screen.findByText(/Cyberpunk 2077/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
