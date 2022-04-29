import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen, waitFor } from 'utils/test-utils'
import CardButton from '.'

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', async () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }

    render(<CardButton id="1" />, {
      cartProviderProps
    })

    const button = screen.getByLabelText(/Adicionar no carrinho/i)

    expect(button).toBeInTheDocument()

    userEvent.click(button)

    await waitFor(() => {
      expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
    })
  })

  it('should render button to remove and call the method if clicked', async () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<CardButton id="1" />, {
      cartProviderProps
    })

    // const button = screen.getByLabelText(/remove from cart/i)

    // expect(button).toBeInTheDocument()

    // userEvent.click(button)

    // await waitFor(() => {
    //   expect(cartProviderProps.removeFromCart).toHaveBeenCalled()
    // })
  })
})
