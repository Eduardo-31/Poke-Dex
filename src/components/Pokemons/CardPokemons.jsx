import React from 'react'
import cardPokemonApi from '../../hooks/cardPokemonApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonName } from '../../slices/namePokemon.slice'

import pokebola from '../img/poke.png'

const CardPokemons = ({pokemon, search, isType, setSearchError}) => {

  const {pokemonCard, setPokemonCard} = cardPokemonApi(pokemon, search, setSearchError)

  const loaderPokemon = useSelector(state => state.loaderPokemon)

  const navigate = useNavigate();

   const info = () =>{
    navigate(`/pokedex/${pokemonCard?.name}`)
    }
    
    if(loaderPokemon) {
      return <article className='card-poke d-flex-card-loader-poke'>
        <div className='card-loader-poke-img'>
          <img src={pokebola} alt="image pokebola loading" />
        </div>
        <h4>Loading<span>...</span></h4>
      </article>
      }

    if(pokemonCard?.sprites.other['official-artwork'].front_default || pokemonCard?.sprites.front_default){
      return <article  className={isType ? `card-poke ${isType}`: `card-poke ${pokemonCard?.types[0].type.name}`}>
      
        
      <div className='circle'>
      </div>
      <div className='card-img'>
        

        <img src={pokemonCard?.sprites.other['official-artwork'].front_default ? pokemonCard?.sprites.other['official-artwork'].front_default : pokemonCard?.sprites.front_default} alt={`${pokemonCard?.name} undefinned `} />
        
      </div>
      <p className='card-name'> {pokemonCard?.name} </p>
      <p className='p-flex-types'>
      {
        pokemonCard?.types.map(type => (<span className={`types ${type.type.name}`} key={type.type.name} > {type.type.name} </span>))
      }
      </p>

      <button onClick={info} className='btn-card'>See more</button>
        
      
    </article>
    }

    
    
  
}

export default CardPokemons