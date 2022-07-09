import React from 'react'
import cardPokemonApi from '../../hooks/cardPokemonApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPokemonName } from '../../slices/namePokemon.slice'

const CardPokemons = ({pokemon, search, isType, setSearchError}) => {

  const {pokemonCard, setPokemonCard} = cardPokemonApi(pokemon, search, setSearchError )

  const dispatch = useDispatch()

  const navigate = useNavigate();

   const info = () =>{
    navigate(`/pokedex/${pokemonCard?.name}`)
    }

    




  return (  
      
    <>
    {

      pokemonCard?.sprites.other['official-artwork'].front_default &&
      
      
      
      <article  className={isType ? `card-poke ${isType}`: `card-poke ${pokemonCard?.types[0].type.name}`}>
      { pokemonCard?.sprites.other['official-artwork'].front_default &&
        <>
      <div className='circle'>
      </div>
      <div className='card-img'>
        <img src={pokemonCard?.sprites.other['official-artwork'].front_default} alt={`${pokemonCard?.name} undefinned `} />
      </div>
      <p className='card-name'> {pokemonCard?.name} </p>
      <p className='p-flex-types'>
      {
        pokemonCard?.types.map(type => (<span className={`types ${type.type.name}`} key={type.type.name} > {type.type.name} </span>))
      }
      </p>

      <button onClick={info} className='btn-card'>See more</button>
        </>
      }
    </article>
     }
    </>
  )
}

export default CardPokemons