import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /meu perfil/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /meus pedidos/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sair/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/orders" />)

    expect(screen.getByRole('link', { name: /meus pedidos/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
