import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { persistLocalStorage } from 'utils'
import { AUTH_URL } from 'constant'

export default function useAuth () {
  const navigate = useNavigate()

  const handleLogin = () => {
    window.location.href = AUTH_URL
  }

  useEffect(() => {
    const hash: string = window.location.hash
    const token: string = hash.split('&')[0].split('=')[1]
    if (token !== undefined) {
      persistLocalStorage<string>('token-spotify', token)
      navigate('/')
    }
  }, [])

  return { handleLogin }
}
