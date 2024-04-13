import React, { useState } from 'react'
import cardPokemonApi from '../../hooks/cardPokemonApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonName } from '../../slices/namePokemon.slice'

import pokebola from '../img/poke.png'

const CardPokemons = ({pokemon, type}) => {
 
  const { pokemonCard } = cardPokemonApi(pokemon)

  const navigate = useNavigate();
  
   const info = () =>{
    navigate(`/pokedex/${pokemonCard?.name}`)
    }

    if(!pokemonCard) {
      return (
        <article className='card-poke d-flex-card-loader-poke'>
          <div className='card-loader-poke-img'>
            <img src={pokebola} alt="image pokebola loading" loading='lazy' />
          </div>
          <h4>Loading<span>...</span></h4>
        </article>
      )
    }else{
      return (
        <article  className={type ? `card-poke ${type}`: `card-poke ${pokemonCard?.types[0].type.name}`}> 
          <div className='circle'></div>
          <div className='card-img'>
            <img src={pokemonCard?.sprites.other['official-artwork'].front_default ? pokemonCard?.sprites.other['official-artwork'].front_default : pokemonCard?.sprites.front_default} alt={`${pokemonCard?.name} image `} loading='lazy' />   
          </div>
          <p className='card-name'> {pokemonCard?.name} </p>
          <p className='p-flex-types'>
            {
              pokemonCard?.types.map(type => (<span className={`types ${type.type.name}`} key={type.type.name} > {type.type.name} </span>))
            }
          </p>
          <button onClick={info} className='btn-card'>See more</button>
        </article>
      )
    }

    
    
  
}

export default CardPokemons