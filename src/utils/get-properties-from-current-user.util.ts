import { type CurrentUser } from 'models'
import { type UserModel } from '../redux/store'

export const getPropertiesFromCurrentUser = (currentUser: CurrentUser): UserModel | null => {
  if (currentUser === undefined) return null
  const { display_name: name, email, id } = currentUser
  return { name, email, id }
}
