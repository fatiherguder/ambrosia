import { createSlice } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native';


export const marketData = createSlice({
  name: 'marketData',
  initialState: [],
  reducers: {
    setMarketData: (state, action) => {
      state.push(action.payload);
    },
  },
})


export const { setMarketData } = marketData.actions

export default marketData.reducer