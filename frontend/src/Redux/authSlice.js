import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    error: null
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload
      if (password === 'test123') {
        state.user = username || 'Guest'
        state.token = 'mock-jwt-token-123456' 
        state.error = null
      } else {
        state.error = 'Invalid password'
      }
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.error = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
