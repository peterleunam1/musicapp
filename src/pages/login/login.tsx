import { LoginContent } from 'components/organisms'
import { AuthLayout } from 'components/templates'
import useAuth from 'hooks/useAuth'
// import useCurrentUser from 'hooks/useCurrentUser'

export default function Login () {
  const { handleToken, error } = useAuth()
  // const { currentUser } = useCurrentUser()
  const handleLogin = async () => {
    handleToken()
  }

  return (
    <AuthLayout>
      {error && <p>{error}</p>}
      <LoginContent onLogin={handleLogin} />
    </AuthLayout>
  )
}
