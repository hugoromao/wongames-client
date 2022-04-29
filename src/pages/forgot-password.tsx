import FormForgotPassword from 'components/FormForgotPassword'
import Auth from 'templates/Auth'

export default function ForgotPassword() {
  return (
    <Auth title="Esqueceu sua senha?">
      <FormForgotPassword />
    </Auth>
  )
}
