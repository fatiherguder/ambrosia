import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice.js'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import marketSlice from './marketSlice.js';
import menuSlice from './menuSlice.js';
import cartSlice from './cartSlice.js';


const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  middleware: [...getDefaultMiddleware({serializableCheck:false})],
  reducer: {
      userData: userSlice,
      marketData: marketSlice,
      menuData: menuSlice,
      cartData: cartSlice
  }
})