import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GameMode = ({ setGameMode, setGameDifficulty }) => {

    const [isGameModeOption, setIsGameModeOption] = useState(false)

    const elementOne = () => {
        if(isGameModeOption){
            setGameDifficulty('easy')
            setGameMode('option')
        }else{
            setGameMode('input')
        }
    }

    const elementTwo = () => {
        if(isGameModeOption){
            setGameDifficulty('medium')
            setGameMode('option')
        }else{
            setIsGameModeOption('true')
        }
    }
    
    const elementThree = () => {
        if(isGameModeOption){
            setGameDifficulty('hard')
            setGameMode('option')
        }else{
            navigate('/pokedex/play')
        }
    }

    const navigate = useNavigate()

  return (
    <div className='play-pokedex__setting'>
        <ul className='play-pokedex__setting__option'>
            <li onClick={elementOne} className={ isGameModeOption ?  'play-pokedex__setting__option__items play-pokedex__setting__option__items-plus' : 'play-pokedex__setting__option__items'}> 
                <a className='play-pokedex__setting__option__items__icon'><i class="fa-solid fa-caret-right"></i></a>
                {isGameModeOption ? 'easy' : 'write response'}
             </li>
            <li onClick={elementTwo} className={ isGameModeOption ?  'play-pokedex__setting__option__items play-pokedex__setting__option__items-plus' : 'play-pokedex__setting__option__items'}>
                 <a className='play-pokedex__setting__option__items__icon'><i class="fa-solid fa-caret-right"></i></a> 
                 {isGameModeOption ? 'medium' : 'show options'}
            </li>
            <li onClick={elementThree} className={ isGameModeOption ?  'play-pokedex__setting__option__items play-pokedex__setting__option__items-plus' : 'play-pokedex__setting__option__items'}> 
                <a className='play-pokedex__setting__option__items__icon'><i class="fa-solid fa-caret-right"></i></a> 
                {isGameModeOption ? 'hard' : 'exit'}
            </li>
            {
                isGameModeOption &&
                <li onClick={() => setIsGameModeOption(false)} className={ isGameModeOption ? 'play-pokedex__setting__option__items play-pokedex__setting__option__items-plus' :  'play-pokedex__setting__option__items'}> 
                    <a className='play-pokedex__setting__option__items__icon'><i class="fa-solid fa-caret-right"></i></a> 
                    back
                </li>
            }
        </ul>
        <div className='play-pokedex__setting__text'>
            Hello coach to start you need to configure your game mode, select an option if you want to continue
        </div>
    </div>
  )
}

export default GameMode