import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getAllPokedexApi = (type, xx) => {

  const [pokemons, setPokemons] = useState()

  useEffect(() => {

        if(!type){
          const URL2 = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
          axios.get(URL2)
          .then(res => setPokemons(res.data.results))
          .catch(err => console.log(err))
        } else {
          
          
          const URL = 'https://pokeapi.co/api/v2/type/'
          axios.get(`${URL}${type}/`)
          .then(res => {setPokemons(res.data.pokemon)
            xx(false)
          })
          .catch(err => console.log(err))
        } 
        

  }, [type])


  return {pokemons, setPokemons}
}

export default getAllPokedexApi