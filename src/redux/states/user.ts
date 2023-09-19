import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type UserModel } from '../store'

const initialState: UserModel = {
  id: '',
  name: '',
  email: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      return { ...state, ...action.payload }
    },
    resetUser: () => {
      return initialState
    }
  }
})
export const { setUser, resetUser } = userSlice.actions
export default userSlice.reducer
