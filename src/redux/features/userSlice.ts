import {createSlice} from '@reduxjs/toolkit'

type InitialState_Type={
    value:number
}


const initialState:InitialState_Type = {
    value: 0
}


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{

    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;