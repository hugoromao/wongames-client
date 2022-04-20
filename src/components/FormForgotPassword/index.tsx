import { useRouter } from 'next/router'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle, Email } from '@styled-icons/material-outlined'

import {
  FormLoading,
  FormWrapper,
  FormError,
  FormSuccess
} from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { useState } from 'react'
import { FieldErrors, forgotValidate } from 'utils/validations'

const FormForgotPassword = () => {
  const { query } = useRouter()
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({ email: (query.email as string) || '' })

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()

    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      console.log('Error', data)
    } else {
      console.log('Success', data)
      setSuccess(true)
    }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircle />
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && <FormError>{formError}</FormError>}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="email"
              onInputChange={(v) => handleInput('email', v)}
              icon={<Email />}
              error={fieldError.email}
              initialValue={query.email as string}
            />

            <Button size="large" fullWidth type="submit" disabled={loading}>
              {loading ? <FormLoading /> : 'Send email'}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
