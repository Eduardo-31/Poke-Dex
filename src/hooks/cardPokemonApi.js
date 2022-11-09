import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setLoaderPokemon } from '../slices/loaderPokemon.slice';
import { setLoaderSearchPokemon } from '../slices/loaderSearchPokemon.slice';

const cardPokemonApi = (poke, search, searchError) => {

  const dispatch = useDispatch()

    const [pokemonCard, setPokemonCard] = useState()
    
    useEffect(() => {
      if(!search){
        searchError(false)
        dispatch(setLoaderPokemon(true))    
        axios.get(poke)
        .then(res => {
          setPokemonCard(res.data)
          dispatch(setLoaderPokemon(false))
        })
        .catch(err => {
          dispatch(setLoaderPokemon(false))
          console.log(err)
        })
        
      }else{
        setPokemonCard(null)
        dispatch(setLoaderPokemon(false))
        dispatch(setLoaderSearchPokemon(true))
          axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
          .then(res => {
            setPokemonCard(res.data)
            dispatch(setLoaderSearchPokemon(false))
            })
            .catch(err => {
              dispatch(setLoaderSearchPokemon(false))
              searchError(true)
              console.log(err)
              }
              )
        }

    }, [poke, search])
    

  return {pokemonCard, setPokemonCard}
}

export default cardPokemonApi