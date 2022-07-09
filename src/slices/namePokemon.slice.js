import { createSlice } from "@reduxjs/toolkit";

export const namePokemonSlice = createSlice({
    name: 'pokemon',
    initialState: '',
    reducers: {
        setPokemonName: (state, action) => action.payload
    }
})

export const { setPokemonName } = namePokemonSlice.actions // exportacion
export default namePokemonSlice.reducer