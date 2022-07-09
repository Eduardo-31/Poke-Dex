import { configureStore } from '@reduxjs/toolkit'
import nameUser from '../slices/nameUser.slice'
import pokemonName from '../slices/namePokemon.slice'

export default configureStore({
    reducer: {
        nameUser,
        pokemonName
    }
})

