/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lock } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/react'

import { FormLoading, FormWrapper, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { FieldErrors } from 'utils/validations'

const FormResetPassword = () => {
  const router = useRouter()

  const routes = useRouter()
  const { query } = routes
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<any>({
    password: '',
    confirmPassword: ''
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
          name="password"
          placeholder="Senha"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
          error={fieldError?.password}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirmar senha"
          type="password"
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
          error={fieldError?.confirm_password}
        />

        <Button size="large" fullWidth type="submit" disabled={loading}>
          {loading ? <FormLoading /> : 'Reset Password'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
