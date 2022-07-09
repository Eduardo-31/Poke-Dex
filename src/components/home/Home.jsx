import React from 'react'
import HomeInput from './HomeInput'
import pokedextitle from '../img/pokedex.png.png'
import poketitle from '../img/timg-title.png'
import ash from '../img/ash.png'
import ash1 from '../img/ash-1.png'
import bulbasaur3 from '../img/bulbasaur-3.png'
import charmander from '../img/charmander.png'
import squirtle from '../img/squirtle.png'
import poke from '../img/pokemon-logo.png'

const Home = ({setIsLogged}) => {
    
  return (
    <div className='bg-home'>

    <section className='container-home'>

          
          <h1>
              <img className='title-img-home' src={poke} alt="" />
          </h1>


      
      <div className='home'>
      <div className='container-img'>

        <img className='img-pokemon' src={bulbasaur3} alt="" />
        <img className='img-ash' src={ash1} alt="" />
        <img className='img-pokemon' src={squirtle} alt="" />
        
    
      </div>
          <span className='subtitle-home'>!Hello trainer!</span>
          <p>to start, give me your name</p>
          <HomeInput setIsLogged={setIsLogged}          
          />
      </div>

    </section>

    </div>
  )
}

export default Home