/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/react'

import { FormLoading, FormWrapper, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { FieldErrors } from 'utils/validations'

const FormForgotPassword = () => {
  const router = useRouter()

  const routes = useRouter()
  const { query } = routes
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<any>({
    identifier: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {} // todo validate

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result: any = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return router.push(result?.url)
    }

    setLoading(false)

    setFormError('email ou senha inválida')
  }

  return (
    <FormWrapper>
      {!!formError && <FormError>{formError}</FormError>}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('identifier', v)}
          icon={<Email />}
          error={fieldError.email}
        />

        <Button size="large" fullWidth type="submit" disabled={loading}>
          {loading ? <FormLoading /> : 'Send email'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
