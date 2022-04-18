import { render, RenderOptions } from '@testing-library/react'
import {
  CartContext,
  CartContextData,
  CartContextDefaultValues
} from 'hooks/use-cart'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type CustomRenderProps = {
  cartProviderProps?: CartContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: React.ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {ui}
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
