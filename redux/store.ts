import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './service/product'
import counterSlice from './feature/action/counterSlice'
import tokenSlice from './feature/auth/authSlice'
import cartSlice from './feature/addToCart/cardSlice'
import userSlice from './feature/userProfile/userSlice'


// create store
export const makeStore = () => {
  return configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        counter: counterSlice,
        auth:tokenSlice,
        cart:cartSlice,
        userProfile:userSlice
       
        
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(productApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']