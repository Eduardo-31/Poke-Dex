import { createSlice } from "@reduxjs/toolkit";

export const nameUserSlice = createSlice({
    name: 'user',
    initialState: '',
    reducers: {
        setUserName: (state, action) => action.payload
    }
})

export const { setUserName } = nameUserSlice.actions // exportacion
export default nameUserSlice.reducer