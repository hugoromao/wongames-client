import Link from 'next/link'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'

import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import React, { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signIn } from 'next-auth/react'
import { FieldErrors, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => {
      setFormError(
        (err?.graphQLErrors[0]?.extensions?.exception as any).data.message[0]
          .messages[0].message
      )
    },
    onCompleted: async () => {
      !error &&
        signIn('credentials', {
          identifier: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setFormError('')

    const errors = signUpValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    await createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Nome"
          type="text"
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
          error={fieldError?.username}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
          error={fieldError?.email}
        />
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

        <Button size="large" fullWidth type="submit">
          {loading ? <FormLoading /> : 'Sign up now'}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
