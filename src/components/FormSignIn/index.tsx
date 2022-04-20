/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/react'

import { FormLink, FormLoading, FormWrapper, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FieldErrors, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const router = useRouter()

  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<any>({
    identifier: '',
    password: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result: any = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
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
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
          error={fieldError.password}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button size="large" fullWidth type="submit" disabled={loading}>
          {loading ? <FormLoading /> : 'Sign in now'}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
