import { configureStore } from '@reduxjs/toolkit'
import pokemonName from '../slices/namePokemon.slice'
import loaderPokemon from '../slices/loaderPokemon.slice'
import loaderSearch from '../slices/loaderSearchPokemon.slice'

export default configureStore({
    reducer: {
        pokemonName,
        loaderPokemon,
        loaderSearch
    }
})

