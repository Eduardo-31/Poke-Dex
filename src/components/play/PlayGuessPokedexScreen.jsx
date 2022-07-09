import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import PlayGuessWrongAnswer from './PlayGuessWrongAnswer'
import PlayGuessCorrectAnswer from './PlayGuessCorrectAnswer'

// image

import charmander from '../img/charmander.png'
import charmander1 from '../img/charmander-1.png'
import poke from '../img/poke.png'
import { useNavigate } from 'react-router-dom'
import GoToPokedex from './GoToPokedex'
import Footer from '../footer/Footer'


const PlayPokedex = () => {


    const [playPokedex, setPlayPokedex] = useState()

    const [isActiveImage, setIsActiveImage] = useState()
    const [isActiveNamePokemon, setIsActiveNamePokemon] = useState()

    const [reserr, setReserr] = useState(false)

    const [isRessWrong, setIsRessWrong] = useState(false)
    const [isRessCorrect, setIsRessCorrect] = useState(false)

    


    const navigate = useNavigate()

    useEffect(() => {
        const random = Math.ceil(Math.random() * 898)
        const URL = 'https://pokeapi.co/api/v2/pokemon/'
        axios.get(`${URL}${random}/`)
        .then(res => setPlayPokedex(res.data))
        .catch(err => console.log(err))
    
    }, [reserr])
    






    const btnResponse = (e) => {
        e.preventDefault()
        
        console.log(e.target.children[0].value.toLowerCase())
        if(e.target.children[0].value.toLowerCase() === playPokedex?.name){ 
            console.log('correcto')
            setIsRessCorrect(true)
            setIsActiveImage(true)
            setIsActiveNamePokemon(false)
            
                setTimeout(() => {
                    setReserr(!reserr)
                }, 5000)
                setTimeout(() => {
                          
                    setIsActiveImage(false)
                    
                }, 4800)
            
                setTimeout(() => {
                    setIsRessCorrect(false)           
                }, 4400)
          

        }else {
            console.log('incorrecto')
            setIsRessWrong(true)
            setTimeout(() => {
                setIsRessWrong(false)
            }, 4500)
        } 
        Form.reset()
    }
    


    const nextRandom = () => {
        setIsActiveImage(false)
        setIsActiveNamePokemon(false)
        setReserr(!reserr)
    }
    
    const isActiveImg = () => {
        setIsActiveImage(!isActiveImage)
    }

    const isActivePokemonName = () => {
        setIsActiveNamePokemon(!isActiveNamePokemon)
    }



    const directPokeInfo = () =>{
        navigate(`/pokedex/${playPokedex?.name}`)
        }


  return (
    <>
    <section className='container-play-pokedex'>

        
        <div className='card-title'>
            <img src={charmander1} alt="" />
         <h6>¿QUIEN ES ESE POKEMON?</h6>
            <img src={charmander1} alt="" />

        </div>
            
        <div className='section-play-pokedex'>


           <div className='play-pokedex-subtitle'> 
                <p className='play-text-subtitle'>¡Welcome to the PLAY ZONE! This is a place to play unlimited.
                The activity of the mini game consists of guessing which pokemon is the one that appears</p>
                
                <GoToPokedex />
        
            </div>
        
        <article>

            <div  className='portada-img'>
                <img src="https://as01.epimg.net/meristation/imagenes/2020/02/14/noticias/1581656735_610153_1581656812_noticia_normal.jpg" alt="" />
                
                <img  onClick={directPokeInfo} className='position-img' src={playPokedex?.sprites.other['official-artwork'].front_default} alt={`undefinned `} />
                        

                <img onClick={directPokeInfo} className={isActiveImage ? 'img-oculta img-active' : 'img-oculta'} src={playPokedex?.sprites.other['official-artwork'].front_default} alt={`undefinned `} />
                
                <span className={isActiveNamePokemon ? 'play-pokemon-name play-pokemon-name-active': 'play-pokemon-name'}>{playPokedex?.name}</span>
                <div className='play-btn-card'>
                    <button className='btn-send' onClick={nextRandom}><i className="fa-solid fa-arrows-rotate"></i></button>
                    <button className='btn-img' onClick={isActiveImg}><i className="fa-solid fa-image"></i></button>
                    <button className='btn-eye' onClick={isActivePokemonName}><i className="fa-solid fa-eye-slash"></i></button>
                </div>

                <PlayGuessWrongAnswer isRessWrong={isRessWrong} />

                <PlayGuessCorrectAnswer isRessCorrect={isRessCorrect}/>

            </div>
            

        </article>

        {
            isRessWrong   && <div className='text-incorrect'><p>wrong answer</p></div>
        }

        {
            isRessCorrect   && <div className='text-correct'><p>It's {playPokedex?.name} </p></div>
        }

        <form className='form-guess' onSubmit={btnResponse} id='Form'>
            <input className='form-guess-screnn-input' placeholder='Response' type="text" />
            <button className='form-guess-btn-submit'><i className="fa-solid fa-share"></i></button>
        </form>
      
        </div>
        
    </section>
        <Footer />
    </>

  )
}

export default PlayPokedex