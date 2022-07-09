import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';

const cardPokemonApi = (poke, search, allPokemon ) => {

    const [pokemonCard, setPokemonCard] = useState()

    
    useEffect(() => {
      if(!search){
        
        axios.get(poke)
          .then(res => {setPokemonCard(res.data)
            
          })
          .catch(err => console.log(err))

        }else{
          
          axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
            .then(res => setPokemonCard(res.data))
            .catch(err => {
              console.log(err)
              setPokemonCard(null)
              allPokemon(true)
              }
            )
        }

    }, [search])
    

  return {pokemonCard, setPokemonCard}
}

export default cardPokemonApi