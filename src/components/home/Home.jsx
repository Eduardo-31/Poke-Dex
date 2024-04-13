import React from 'react'
import HomeInput from './HomeInput'
import ash from '../img/ash-1.png'
import bulbasaur3 from '../img/bulbasaur-3.png'
import squirtle from '../img/squirtle.png'
import poke from '../img/pokemon-logo.png'

const Home = () => {
    
  return (
    <div className='bg-home'>

    <section className='container-home'>

          
          <h1>
              <img className='title-img-home' src={poke} alt="" />
          </h1>

      
      <div className='home'>
      <div className='container-img'>

        <img className='img-pokemon' src={bulbasaur3} alt="" />
        <img className='img-ash' src={ash} alt="" />
        <img className='img-pokemon' src={squirtle} alt="" />
        
    
      </div>
          <span className='subtitle-home'>!Hello trainer!</span>
          <p className='text-home'>to start, give me your name</p>
          <HomeInput />
      </div>

    </section>

    </div>
  )
}

export default Home