import { createSlice } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native';


export const menuSlice = createSlice({
  name: 'menuData',
  initialState: [],
  reducers: {
    setMenuData: (state, action) => {
      state.push(action.payload);
      console.log(state.menu)
    },
  },
})


export const { setMenuData } = menuSlice.actions

export default menuSlice.reducer