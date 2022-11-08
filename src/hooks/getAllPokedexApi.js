import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getAllPokedexApi = (type, setSearchError, search, setIsType) => {

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
        if(!search && !type){
          setIsType(xx.value = '')
          const URL2 = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
          axios.get(URL2)
          .then(res => {
            setPokemons(res.data.results)
            setSearchError(false)
          })
          .catch(err => console.log(err))
        } else if(type){
          const URL = 'https://pokeapi.co/api/v2/type/'
          axios.get(`${URL}${type}/`)
          .then(res => {
            setPokemons(res.data.pokemon)
            setSearchError(false)
          })
          .catch(err => {
            console.log(err)
            setSearchError(true)
          })
        } 
        

  }, [type, search])


  return {pokemons, setPokemons}
}

export default getAllPokedexApi