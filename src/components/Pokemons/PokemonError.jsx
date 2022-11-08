import React from 'react'
import './PokemonError.css'
import { useNavigate } from 'react-router-dom'
import profesorOak from '../img/Profesor_Oak.png'


const PokemonError = () => {
    
    const navigate = useNavigate()
    
    const backPokedex = () => {
        navigate('/pokedex')
    }


  return (
    <div className='portada-pokemon-error'>
        <div className='card-pokemon-error'>
            <p className='error-pokemnon-text'>Pokemon Not Found</p>
            <div className='d-flex-img-btn'>
            <div className='error-pokemon-btn'>
                <button onClick={backPokedex}>Pokedex</button>
            </div>
            <div className='error-pokemon-img'>
                <img src={profesorOak} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default PokemonError