import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)
    // renderizar o gamecard
    expect(screen.getByRole('article')).toBeInTheDocument()
    // verifiquem se title
    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
    // verifiquem se developer
    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()
    // verifiquem se img
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    // verifiquem se price
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
})
