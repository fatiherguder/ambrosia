import { createSlice } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native';


export const userSlice = createSlice({
  name: 'userData',
  initialState: [],
  reducers: {
    setUserData:  (state, action) => {
       state.push(action.payload);
      console.log(state._document)
    },
  },
})


export const { setUserData } = userSlice.actions

export default userSlice.reducer