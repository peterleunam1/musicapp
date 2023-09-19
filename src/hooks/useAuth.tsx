import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { persistLocalStorage, getTokenFromUrl, getPropertiesFromCurrentUser } from 'utils'
import { AUTH_URL, PrivateRoutes } from 'constant'
import { resetUser, setUser } from '../redux/states/user'
import getCurrentUser from '../services/get-current-user.service'
import { type CurrentUser } from 'models'

export default function useAuth () {
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = getTokenFromUrl()
  persistLocalStorage<string>('token-spotify', token)

  const handleToken = () => {
    window.location.href = AUTH_URL
  }

  const getUser = async () => {
    try {
      const response = await getCurrentUser()
      return getPropertiesFromCurrentUser(response as CurrentUser)
    } catch (error: unknown) {
      setError('')
    }
  }

  useEffect(() => {
    dispatch(resetUser())
    getUser().then((response) => {
      if (response) {
        dispatch(setUser(response))
        navigate(`/${PrivateRoutes.PRIVATE}`)
      }
    })
  }, [])

  return { handleToken, error }
}
