import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import PlayGuessWrongAnswer from './PlayGuessWrongAnswer'
import PlayGuessCorrectAnswer from './PlayGuessCorrectAnswer'

// image

import charmander1 from '../../img/charmander-1.png'
import confetiAnimate from '../../img/confeti-animate.gif'
import GoToPokedex from '../GoToPokedex'
import Footer from '../../footer/Footer'
import LoadingPage from '../../LoadingPage/LoadingPage'
import useCounter from '../../../hooks/useCounter'
import PlayGameOver from '../PlayGameOver'
import PlayGuessResponseOptions from './PlayGuessResponseOptions'
import GameMode from './GameMode'
import PlayGuessPokemon from './PlayGuessPokemon'

import './styles/PlayGuessPokedexScreen.css'

const shiftLimit = 20
const difficulty = {
    easy: 4,
    medium: 8,
    hard: 12
}

const PlayGuessScreen = () => {


    const [pokemon, setPokemon] = useState()
    const [isActivePokemonImage, setIsActivePokemonImage] = useState(false)
    const [isActivePokemonName, setIsActivePokemonName] = useState(false)

    const [isRessWrong, setIsRessWrong] = useState(false)
    const [isRessCorrect, setIsRessCorrect] = useState(false)
    const [isRenderModal, setIsRenderModal] = useState(false)

    const [reset, setReset] = useState(false)

    const [gameMode, setGameMode] = useState(true)
    const [gameOver, setGameOver] = useState(false)
    const [gameDifficulty, setGameDifficulty] = useState(null)
    
    const [pokemonOptions, setPokemonOptions] = useState()
    const [pokemonSelected, setPokemonSelected] = useState(null)
    

    const { counter:wrongAnswers, plusOne:wrongAnswersPlusOne } = useCounter(0)
    const { counter:correctAnswers, plusOne: correctAnswersPlussOne } = useCounter(0)


    useEffect(() => {
        const random = Math.ceil(Math.random() * 898)
        const URL = 'https://pokeapi.co/api/v2/pokemon/'
        axios.get(`${URL}${random}/`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [reset])


    const getPokemonsOptions = async() => {
        const arr = []
        while(arr.length < difficulty[gameDifficulty] - 1){
            const random = Math.ceil((Math.random() * 890))
            if(random != pokemon.id && arr.indexOf(random) == -1){
                arr.push(random)
            }
        }
        let data = []
        await Promise.all(arr.map(async(item) => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${item}/`)
                .then(res => (data.push(res.data.name), console.log(res.data.name)))
                .catch(err => console.log(err))
        }))
        data.unshift(pokemon.name)
        data.sort((a,b) => Math.random() - 0.5)
        setPokemonOptions(data)
        if(pokemonSelected){
            setPokemonSelected(null)
        }
    }

    const submit = (e) => {
        e.preventDefault()
        if(isRenderModal){
            return
        }

        const value = e.target.children[0].value.toLowerCase()

        if(value.replace(/\s/g,'').length === 0){
            return false
        }

        setIsRenderModal(true)

        if(value === pokemon?.name){ 
            if(isRessWrong){
                setIsRessWrong(false)
            }
            setIsRessCorrect(true)
            setIsActivePokemonImage(true)
            setIsActivePokemonName(false)
            
                setTimeout(() => {
                    setIsActivePokemonImage(false)
                }, 4800)
                
                setTimeout(() => {
                    setIsRessCorrect(false)           
                }, 4400)
                setTimeout(() => {
                    setReset(!reset)
                    setIsRenderModal(false)
                }, 5200)
        }else {
            setIsRessWrong(true)
            setIsActivePokemonName(false)
            setIsActivePokemonImage(false)
            setTimeout(() => {
                setIsRessWrong(false)
            }, 4400)
            setTimeout(() => {
                setReset(!reset)
                setIsRenderModal(false)
            }, 5200)
        }
        FormPokemon.reset()
    }

    useEffect(() => {
      if(gameMode == 'option'){
        getPokemonsOptions()
      }
    }, [gameMode, pokemon])
    


    const sendPokemon = (name) => {
        if(!pokemonSelected){
            setPokemonSelected(name)
            if(name === pokemon.name){ 
                setIsRessCorrect(true)
                setIsActivePokemonImage(true)
                setIsActivePokemonName(true)
                
                setTimeout(() => {
                        setIsActivePokemonName(false)
                        setIsActivePokemonImage(false)
                    }, 4800)
                    setTimeout(() => {
                        setIsRessCorrect(false)
                    }, 5000)
                    setTimeout(() => {    
                        setReset(!reset)
                        correctAnswersPlussOne()
                    }, 5900)
            }else{
                setIsRessWrong(true)
                setIsActivePokemonImage(false)
                console.log('state')
                setTimeout(() => {
                    setIsRessWrong(false)
                }, 5000)
                setTimeout(() => {
                    setReset(!reset)
                    wrongAnswersPlusOne()
                }, 5900)
            } 
        }
    }



    useEffect(() => {
      if(correctAnswers + wrongAnswers == shiftLimit){
        setGameOver(true)
      }
    }, [correctAnswers, wrongAnswers])
    


 

  return (
    !pokemon ?
        <LoadingPage /> :
        gameOver ?
        <PlayGameOver 
            success={correctAnswers}
            failed={wrongAnswers}
        />
        :
        <>
            <section className='container-play-pokedex'>
            <div className='card-title'>
                <img src={charmander1} alt="image" />
            <h6>¿WHO IS THAT POKEMON?</h6>
                <img src={charmander1} alt="image" />

            </div>
                
            <div className='section-play-pokedex'>

            <div className='play-pokedex-subtitle'> 
                <p className='play-text-subtitle'>¡Welcome to the GAME ZONE! This is a place to play unlimited. The minigame activity is to guess which pokémon appears on the screen, so let's get started. ¿Are You Ready?</p> 
                <GoToPokedex />
            </div>
            
                <article>

                    <div  className='portada-img'>
                        
                        {
                            gameMode === true &&
                            <GameMode
                                setGameMode={setGameMode}
                                setGameDifficulty={setGameDifficulty}
                            />
                        }

                        {
                            gameMode != true && 
                            <>


                                <PlayGuessPokemon 
                                    pokemon={pokemon}
                                    gameMode={gameMode}
                                    isActivePokemonName={isActivePokemonName}
                                    setIsActivePokemonName={setIsActivePokemonName}
                                    isActivePokemonImage={isActivePokemonImage}
                                    setIsActivePokemonImage={setIsActivePokemonImage}
                                    reset={reset}
                                    setReset={setReset}
                                />
                                <PlayGuessWrongAnswer isRessWrong={isRessWrong} gameMode={gameMode} wrongAnswers={wrongAnswers}  />
                                <PlayGuessCorrectAnswer isRessCorrect={isRessCorrect} gameMode={gameMode} correctAnswers={correctAnswers}/>
                                <img className={!isRessCorrect ? 'confeti-image' : 'confeti-image confeti-image-isShow'} src={confetiAnimate} alt="image" />
                               
                                {
                                    gameMode === 'option' &&
                                    <span className='play-pokedex__shifts'>  {correctAnswers + wrongAnswers + 1}/{shiftLimit} </span>
                                }
                               
                            </>
                        }

                        


                    </div>
                    

                </article>

                {
                    gameMode == 'input' && isRessWrong  && <div className='text-incorrect'><p>wrong answer</p></div>
                }

                {
                    gameMode == 'input' && isRessCorrect && <div className='text-correct'><p>It's {pokemon?.name} </p></div>
                }

                {
                    gameMode === 'input' &&
                    <form className='form-guess' onSubmit={submit} id='FormPokemon'>
                        <input className='form-guess-screnn-input' placeholder='Response' type="text" />
                        <button className='form-guess-btn-submit'><i className="fa-solid fa-share"></i></button>
                    </form>
                }
                
                {
                    gameMode == 'option' && 
                    <PlayGuessResponseOptions 
                        response={pokemon?.name}
                        pokemonOptions={pokemonOptions}
                        pokemonSelected={pokemonSelected}
                        sendPokemon={sendPokemon}
                        isRessCorrect={isRessCorrect}
                        isRessWrong={isRessWrong}
                    />
                }
        
            </div>
            
            </section>
            <Footer />
        </>

  )
}

export default PlayGuessScreen