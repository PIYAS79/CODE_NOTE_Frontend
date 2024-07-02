import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice';
import { baseApi } from "./api/baseApi";


const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        users:userReducer,
    },
    devTools:true,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})




export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch