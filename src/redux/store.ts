import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './states'
import { type AppStore } from 'models'

export const store = configureStore<AppStore>({
  reducer: {
    user: userSlice
  }
})
