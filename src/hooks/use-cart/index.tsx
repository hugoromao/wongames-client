import { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'

export type CartContextData = {
  items: string[]
}

export const CartContextDefaultValues = {
  items: []
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CART_KEY = 'cartItems'

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        items: cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
