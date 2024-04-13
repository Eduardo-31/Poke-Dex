import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getAllPokedexApi = (type, search, setLoadingPokemons) => {
  const [pokemons, setPokemons] = useState()
  
  console.log('HOOK',{type})

  useEffect(() => {
        if(!type){
          const URL2 = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
          axios.get(URL2)
          .then(res => {
            if(search){
              const pokemons = res.data.results.filter(pokemon => pokemon.name.includes(search))
              setPokemons(pokemons)
            }else{
              setPokemons(res.data.results)
            }
          })
          .catch(err => console.log(err))
          .finally(() => setLoadingPokemons(false))
        } else  {
          const URL = 'https://pokeapi.co/api/v2/type/'
          axios.get(`${URL}${type}/`)
          .then(res => {
            if(search){
              const pokemons = res.data.pokemon.filter(pokemon => pokemon.pokemon.name.includes(search))
              setPokemons(pokemons)
            }else{
              setPokemons(res.data.pokemon)
            }
          })
          .catch(err =>console.log(err))
          .finally(() => setLoadingPokemons(false))
        } 
        

  }, [type, search])


  return {pokemons, setPokemons}
}

export default getAllPokedexApi