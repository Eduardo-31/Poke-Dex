import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MemoryCard from './MemoryCard'
import './styles/MemoryGameScreen.css'
import Chronometer from './Chronometer'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import MemoryGameFooter from './MemoryGameFooter'
import LoadingPage from '../../LoadingPage/LoadingPage'
import useCounter from '../../../hooks/useCounter'
import PlayGameOver from '../PlayGameOver'
import GameDetails from './GameDetails'

const MemoryGameScreen = () => {

  const [pokemons, setPokemons] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [comparePokemon, setComparePokemon] = useState(null)
  const [time, setTime] = useState(0)
  const [results, setResults] = useState([])
  const [playerOneResults, setPlayerOneResults] = useState([])
  const [playerTwoResults, setPlayerTwoResults] = useState([])
  
  const [gameMode, setGameMode] = useState('multiplayer')
  const [level, setLevel] = useState('5x6')

  const [isPlay, setIsPlay] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  const navigate = useNavigate()

  const controlRef = useRef()

  const { counter:shift, plusOne:plusOneShift, reset:resetShift } = useCounter(1)

  useEffect(() => {
    const offset = Math.floor(Math.random() * 898)
    const limit = level.split('x').reduce((acc, current) => acc * current) / 2
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        .then(res => {
          const result = res.data.results;
          const arr = [...result, ...result]
          arr.sort(() => Math.random() - 0.5)
          setPokemons(arr)
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
  }, [level, gameMode])


    const handlePokemon = (value) => {
      if(selectedPokemon && comparePokemon || selectedPokemon === value || results.includes(value) || playerOneResults.includes(value) || playerTwoResults.includes(value))return
      if(!selectedPokemon){
        setSelectedPokemon(value)
      }else{
        let stopShift = false
        setComparePokemon(value)
        const selectedPokemonName = selectedPokemon.slice(0, selectedPokemon.lastIndexOf('/'))
        if(selectedPokemonName === value.slice(0, value.lastIndexOf('/'))){
          
          if(results.length === pokemons.length - 2 ||
             playerOneResults.length + playerTwoResults.length === pokemons.length - 2
          ){
            stopShift = true
          }

          if(gameMode === 'player'){
            setTimeout(() => {
              setResults([...results, value, selectedPokemon])
            }, 2000);
          }else{
            if( shift % 2 === 1) {
              setTimeout(() => {
                setPlayerOneResults([...playerOneResults, value, selectedPokemon])
              }, 2000);
            }

            if( shift % 2 == 0){
              setTimeout(() => {
                setPlayerTwoResults([...playerTwoResults, value, selectedPokemon])
              }, 2000);
            }
          }
        }
        
        setTimeout(() => {
          setComparePokemon(true)
          setSelectedPokemon(true)
          if(!stopShift){
            plusOneShift()
          }
        }, 2000);

        setTimeout(() => {
          setComparePokemon(false)
          setSelectedPokemon(false)
        }, 2400);
      }
    }
    

    const resetResult = () => {
      results.length && setResults([])
      playerOneResults.length && setPlayerOneResults([])
      playerTwoResults.length && setPlayerTwoResults([])
    }

    const initChronometer = () => {
      controlRef.current = setInterval(() => {
          setTime(state => state + 1000)
        }, 1000);
    }

    const startGame = () => {
        setIsPlay(true)
        if(gameMode === 'player'){
          initChronometer()
        }
    }

    const stopChronometer = () => {
      clearInterval(controlRef.current)
    }
    
    const resetChronometer = () => {
      setTime(0)
      clearInterval(controlRef.current)
    }
  
    console.log('SHIFTS',shift)
    console.log(results)
    console.log(playerOneResults)
    console.log(playerTwoResults)

    useEffect(() => {
      if(results.length === Number(level[0]) * Number(level[level.length - 1]) ||
         playerOneResults.length + playerTwoResults.length === Number(level[0]) * Number(level[level.length - 1])
      ){
        setIsGameOver(true)
        stopChronometer()
      }
    }, [results, playerOneResults, playerTwoResults])
    

    // 10
    // 8  -  2
  return (
    <>
      {
        !pokemons?.length ?
        <LoadingPage />
        : 
        isGameOver ?
        <PlayGameOver 
          gameMode={gameMode}
          success={gameMode === 'player' ? results.length / 2 : { playerOne: playerOneResults.length / 2 , playerTwo: playerTwoResults.length / 2  }}
          failed={gameMode === 'player' ? shift - results.length / 2 : { playerOne:  Math.ceil(shift / 2 - playerOneResults.length / 2), playerTwo: Math.floor(shift / 2 - playerTwoResults.length / 2)}}
          shifts={gameMode === 'player' ? shift : { playerOne: Math.ceil(shift / 2) , playerTwo: Math.floor(shift / 2) }}
          time={time}
        />
        :
        <div className='memory-game-container'>

          <div className='memory-game'>

            <div className='memory-game__header'>
              <a className='memory-game__header__icon'><i class="fa-solid fa-caret-down"></i></a>
              <p onClick={stopChronometer}>Memory Game</p> 
              <a onClick={() => navigate('/pokedex/play')} className='memory-game__heade__button-back'><i class="fa-solid fa-right-from-bracket"></i></a>
            </div>
          
            <div className='memory-game__main'>
              <div className='memory-game__main__header'>
                <div className='memory-game__main__header__border'></div>
                <p>
                  ¡Welcome to the MEMORY GAME ZONE! This is a place to play unlimited. The minigame activity consists of discovering pairs of identical or related elements that are hidden.
                  You can also set your game mode to play alone or with a friend and add more levels to increase the difficulty, good luck.
                </p>
                <div className='memory-game__main__header__border'></div>
              </div>
            
              <GameDetails
                gameMode={gameMode}
                isPlay={isPlay}
                time={time}
                setTime={time}
                shift={shift}
                results={results.length}
                playerOneResults={playerOneResults.length}
                playerTwoResults={playerTwoResults.length}
              />

              <div style={{gridTemplateColumns: `repeat(${!isLoading && level[0]}, 1fr)`}} className='memory-game-grid'>
                {
              
                  pokemons?.map((pokemon, index) => (
                    <MemoryCard 
                        key={pokemon.name + index} 
                        index={index} 
                        url={pokemon.url} 
                        handlePokemon={handlePokemon}
                        selectedPokemon={selectedPokemon}
                        comparePokemon={comparePokemon}
                        results={results}
                        playerOneResults={playerOneResults}
                        playerTwoResults={playerTwoResults}
                        time={time}
                      />
                    ))
                  }
                {
                  !isPlay && 
                  <div className='memory-game__main__isPlay'>
                    <span onClick={startGame}>Play</span>
                  </div>

                }
              </div>

                <MemoryGameFooter 
                  level={level}
                  setLevel={setLevel}
                  gameMode={gameMode}
                  setGameMode={setGameMode}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  isPlay={isPlay}
                  setIsPlay={setIsPlay}
                  resetChronometer={resetChronometer}
                  resetResult={resetResult}
                  resetShift={resetShift}
                />
              
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default MemoryGameScreen