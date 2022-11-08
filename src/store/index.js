import { configureStore } from '@reduxjs/toolkit'
import nameUser from '../slices/nameUser.slice'
import pokemonName from '../slices/namePokemon.slice'
import loaderPokemon from '../slices/loaderPokemon.slice'
import loaderSearch from '../slices/loaderSearchPokemon.slice'

export default configureStore({
    reducer: {
        nameUser,
        pokemonName,
        loaderPokemon,
        loaderSearch
    }
})

