import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirmar senha')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Inscrever-se/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text and link to sign in', () => {
    renderWithTheme(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByRole('link', { name: /Entrar/i })).toBeInTheDocument()
    expect(screen.getByText(/Já tem uma conta\?/i)).toBeInTheDocument()
  })
})
