import { createSlice } from '@reduxjs/toolkit'

export const loaderPokemonSlice = createSlice({
    name: 'loaderPokemon',
    initialState: true,
    reducers: {
        setLoaderPokemon: (state, action) => action.payload
    }
})

export const { setLoaderPokemon } = loaderPokemonSlice.actions
export default loaderPokemonSlice.reducer