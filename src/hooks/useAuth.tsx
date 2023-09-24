import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from 'services'
import { type CurrentUser } from 'models'
import {
  persistLocalStorage,
  getTokenFromUrl,
  getPropertiesFromCurrentUser
} from 'utils'
import { LocalStorageTypes, PrivateRoutes } from 'constant'
import { setUser } from '../redux/states/user'
import useNavigation from './useNavigation'

export default function useAuth () {
  const [error, setError] = useState<string>('')
  const dispatch = useDispatch()
  const { goTo } = useNavigation()
  const token = getTokenFromUrl()
  persistLocalStorage<string>(LocalStorageTypes.TOKEN, token)

  const getUser = async () => {
    try {
      const response = await getCurrentUser()
      return getPropertiesFromCurrentUser(response as CurrentUser)
    } catch (error: unknown) {
      setError('')
    }
  }

  useEffect(() => {
    getUser().then((response) => {
      if (response) {
        dispatch(setUser(response))
        goTo(`/${PrivateRoutes.PRIVATE}`)
      } else {
        setError('there was an error')
      }
    })
  }, [])

  return { error }
}
