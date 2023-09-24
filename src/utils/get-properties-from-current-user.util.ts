import { type CurrentUser, type UserModel } from 'models'

export const getPropertiesFromCurrentUser = (currentUser: CurrentUser): UserModel | null => {
  if (currentUser === undefined) return null
  const { display_name: name, email, id } = currentUser
  return { name, email, id }
}
