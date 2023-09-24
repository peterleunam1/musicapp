import { BASE_URL, localStorageTypes } from 'constant'
import { type CurrentUser } from 'models'
import { getLocalStorage } from 'utils'

const URL: string = `${BASE_URL}/me`

export default async function getCurrentUser (): Promise<CurrentUser | undefined> {
  const token: string = getLocalStorage(localStorageTypes.TOKEN)
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!response.ok) {
      throw new Error('Error en la petición')
    }
    const result = await response.json()
    return result
  } catch (err) {
    console.error(err)
  }
}
