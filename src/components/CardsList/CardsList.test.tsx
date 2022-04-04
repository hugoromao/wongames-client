import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardsList from '.'

import cardsMock from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByText(/4325/i)).toBeInTheDocument()
    expect(screen.getByText(/4326/i)).toBeInTheDocument()
  })
})
