import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReducer from './features/authSlice';


const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth:authReducer
    },
    devTools:true,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})




export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch