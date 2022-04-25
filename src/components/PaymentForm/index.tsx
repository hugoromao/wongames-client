import {
  CardElement,
  useElements,
  useStripe,
  PaymentIntent
} from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import { useRouter } from 'next/router'

import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import { useCart } from 'hooks/use-cart'
import { Session } from 'next-auth'
import { useEffect, useState } from 'react'
import { createPaymentIntent, createPayment } from 'utils/stripe/methods'

import * as S from './styles'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const stripe = useStripe()
  const { items } = useCart()
  const { push } = useRouter()
  const elements = useElements()

  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [freeGames, setFreeGames] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (freeGames) {
      saveOrder()
      push('/success')
      return
    }

    const payload = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload?.error) {
      setError(`Payment failed ${payload?.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)
      saveOrder(payload?.paymentIntent)
      push('/success')
    }
  }

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt! as string
        })

        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
          return
        }

        setFreeGames(false)
        setClientSecret(data.client_secret)
      }
    }

    setPaymentMode()
  }, [items, session])

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy</S.FreeGames>
          ) : (
            <CardElement
              onChange={handleChange}
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
            />
          )}
          {!!error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={(!!error || disabled) && !freeGames}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
