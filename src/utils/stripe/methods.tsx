import { PaymentIntent } from '@stripe/stripe-js'
import { CartItem } from 'hooks/use-cart'

type FetcherParams = {
  url: string
  body: string
  token: string
}

const fetcher = async ({ url, body, token }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    body
  })

  return await response.json()
}

type PaymentIntentParams = {
  token: string
  items: CartItem[]
}

export const createPaymentIntent = async ({
  items,
  token
}: PaymentIntentParams) => {
  const response = await fetcher({
    url: `/orders/create-payment-intent`,
    body: JSON.stringify({ cart: items }),
    token
  })

  return await response.json()
}

type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent?: PaymentIntent
  token: string
}

export const createPayment = ({
  items,
  paymentIntent,
  token
}: CreatePaymentParams) => {
  return fetcher({
    url: '/orders',
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method
    }),
    token
  })
}
