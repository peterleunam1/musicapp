import { type CurrentUser } from 'models'
import { getLocalStorage } from 'utils'

export default async function getCurrentUser (): Promise<CurrentUser | undefined> {
  const token: string = getLocalStorage('token-spotify')
  try {
    const response = await fetch('https://api.spotify.com/v1/me', {
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
