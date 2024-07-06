import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type InitialState_Type = {
    user: null | object,
    token: null | object
}
const initialState: InitialState_Type = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<InitialState_Type>) => {
            const { token, user } = action.payload;
            state.user = user;
            state.token = token;
        },
        removeUser:(state)=>{
            state.token=null;
            state.user = null;
        }
    }
})

export const {setUser,removeUser} = authSlice.actions;
export default authSlice.reducer;