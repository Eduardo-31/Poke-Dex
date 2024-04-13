import React from 'react'
import { useNavigate } from 'react-router-dom'


import bgGuessPokemon from '../../img/bg-who-is-that-pokémon.png'

const PlayGuessPokemon = ({pokemon, gameMode, isActivePokemonName, setIsActivePokemonName, isActivePokemonImage, setIsActivePokemonImage}) => {

    const navigate = useNavigate()

    const directPokeInfo = () =>{
        navigate(`/pokedex/${pokemon?.name}`)
    }

    const changePokemonRandom = () => {
        setIsActivePokemonImage(false)
        setIsActivePokemonName(false)
        setReset(!reset)
    }
    
    const activePokemonImage = () => {
        setIsActivePokemonImage(!isActivePokemonImage)
    }

    const activePokemonName = () => {
        setIsActivePokemonName(!isActivePokemonName)
    }


  return (
    <>
        <img src={bgGuessPokemon} alt="image guess pokemon" />


        <img  onClick={directPokeInfo} className='position-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt={`pokemon image`} loading='lazy'/>                             
        <img onClick={directPokeInfo} className={isActivePokemonImage ? 'img-oculta img-active' : 'img-oculta'} src={pokemon?.sprites.other['official-artwork'].front_default} alt={`pokemon image`}  loading='lazzy'/>
        
        <span className={isActivePokemonName ? 'play-pokemon-name play-pokemon-name-active': 'play-pokemon-name'}>{pokemon?.name}</span>

        {
            gameMode === 'input' &&
            <div className='play-btn-card'>
                <button className='btn-send' onClick={changePokemonRandom}><i className="fa-solid fa-arrows-rotate"></i></button>
                <button className='btn-img' onClick={activePokemonImage}><i className="fa-solid fa-image"></i></button>
                <button className='btn-eye' onClick={activePokemonName}><i className="fa-solid fa-eye-slash"></i></button>
            </div>
        }
    </>
  )
}

export default PlayGuessPokemon