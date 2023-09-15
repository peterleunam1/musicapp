import { LoginContent } from 'components/organisms'
import { AuthLayout } from 'components/templates'

export default function Login () {
  return (
   <AuthLayout>
    <LoginContent onLogin={() => {}}/>
   </AuthLayout>
  )
}
