import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type UserModel } from '../store'
import { clearLocalStorage, getLocalStorage, persistLocalStorage } from 'utils'
import { LocalStorageTypes } from 'constant'

const initialState: UserModel = {
  id: '',
  name: '',
  email: ''
}
const userSlice = createSlice({
  name: 'user',

  initialState: getLocalStorage(LocalStorageTypes.USER)
    ? getLocalStorage(LocalStorageTypes.USER)
    : initialState,

  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      const result = { ...state, ...action.payload }
      persistLocalStorage<UserModel>(LocalStorageTypes.USER, result)
      return result
    },
    resetUser: () => {
      clearLocalStorage(LocalStorageTypes.USER)
      return initialState
    }
  }
})
export const { setUser, resetUser } = userSlice.actions
export default userSlice.reducer
