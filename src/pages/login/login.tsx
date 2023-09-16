import { LoginContent } from 'components/organisms'
import { AuthLayout } from 'components/templates'
import useAuth from 'hooks/useAuth'

export default function Login () {
  const { handleLogin } = useAuth()

  return (
    <AuthLayout>
      <LoginContent onLogin={handleLogin} />
    </AuthLayout>
  )
}
