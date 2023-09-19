import { configureStore } from '@reduxjs/toolkit'
import userSlice from './states/user'

export interface UserModel {
  id: string
  name: string
  email: string
}

export interface AppStore {
  user: UserModel
}

export const store = configureStore<AppStore>({
  reducer: {
    user: userSlice
  }
})
