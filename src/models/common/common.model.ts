import { type UserModel } from '../user'

export interface ChildrenModel {
  children: React.ReactNode
}

export interface AppStore {
  user: UserModel
}
