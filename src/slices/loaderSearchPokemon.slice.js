import { createSlice } from '@reduxjs/toolkit'

export const loadingSearchPokemonSlice = createSlice({
    name: 'loadingSearchPokemon',
    initialState: false,
    reducers: {
        setLoaderSearchPokemon: (state, action) => action.payload 
    }
})

export const { setLoaderSearchPokemon } = loadingSearchPokemonSlice.actions
export default loadingSearchPokemonSlice.reducer