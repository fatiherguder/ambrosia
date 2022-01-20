import { createSlice } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native';


export const cartData = createSlice({
  name: 'cartData',
  initialState: [],
  reducers: {
    setCartData: (state, action) => {
      state.push(action.payload);
      console.log(state)
    },
    removeCartData: state => {
        state.pop = [];
        console.log(state)
    }
  },
})


export const { setCartData,removeCartData } = cartData.actions

export default cartData.reducer