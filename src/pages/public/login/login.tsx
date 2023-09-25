import { LoginContent } from 'components/organisms'
import { AuthLayout } from 'components/templates'
import { AUTH_URL } from 'constant'

export default function Login () {
  const handleToken = () => {
    window.location.href = AUTH_URL
  }

  return (
    <AuthLayout>
      <LoginContent onLogin={handleToken} />
    </AuthLayout>
  )
}
