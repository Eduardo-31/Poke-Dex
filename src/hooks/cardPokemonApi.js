import React, { useEffect, useState } from 'react'
import axios from 'axios'

const cardPokemonApi = (url) => {

    const [pokemonCard, setPokemonCard] = useState()
    
    console.log('---HOOK - CARD---')
    useEffect(() => {
      console.log('---USE EFEECT---')
        axios.get(url)
        .then(res => setPokemonCard(res.data))
        .catch(err => console.log(err))
    }, [url])
    

  return { pokemonCard }
}

export default cardPokemonApi