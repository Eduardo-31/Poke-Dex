import React from 'react'
import { useNavigate } from 'react-router-dom'
import poke from '../img/poke.png'

const GoToPokedex = () => {

    const navigate = useNavigate()

    const play_GoToPokedex = () => {
        navigate('/pokedex')
    }


  return (
    <div className='container-go-to-pokedex'>
        <div onClick={play_GoToPokedex} className='play-go-to-pokedex'>
            <p>Go To</p>
            <img src={poke} alt="" />
      </div>
    </div>
  )
}

export default GoToPokedex