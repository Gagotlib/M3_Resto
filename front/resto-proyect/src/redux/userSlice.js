import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  userAppointments: [],
}

export const userSlice = createSlice({
  //nombre
  name: "user",
  // estado inicial
  initialState,
  //lógica
  reducers: {
    setUser: (state, action) => {
      // console.log(action)
      state.user = action.payload
    },

    setUserAppointments: (state, action) => {
      // console.log(action)
      state.userAppointments = action.payload
    },

    logoutUser: (state) => {
      state.user = null
      state.userAppointments = []
    },
  },
})

export const { setUser, setUserAppointments, logoutUser } = userSlice.actions
export default userSlice.reducer
