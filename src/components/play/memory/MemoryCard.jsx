import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MemoryCard = ({url, index, handlePokemon, selectedPokemon, comparePokemon, results, playerOneResults, playerTwoResults}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
      axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    }, [])
    
    const key = `${pokemon?.name} / ${index}`
    const rotationCondition = selectedPokemon === key || comparePokemon === key

  return (
    <div onClick={() => handlePokemon(key)} className={rotationCondition ? 'memory-card memory-card-isShow' : results.includes(key) ? 'memory-card memory-card-isShow memory-card-active' :  playerOneResults.includes(key) ?  'memory-card memory-card-isShow memory-card-active memory-card-one-active ' : playerTwoResults.includes(key) ? 'memory-card memory-card-isShow memory-card-active memory-card-two-active' : 'memory-card'}>
        <img 
            src={pokemon?.sprites.other['official-artwork'].front_default || pokemon?.sprites.front_default}
            alt="pokemon image"
            loading='lazy'
        />
    </div>
  )
}

export default MemoryCard