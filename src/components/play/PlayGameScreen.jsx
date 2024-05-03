import React from 'react'
import './styles/PlayHome.css'
import { useNavigate } from 'react-router-dom'
import title from '../img/pokedex.png.png'


const PlayGameScreen = () => {

    const navigate = useNavigate()

  return (
    <section className='container-play'>
        
        <div className='section-play'>
        <p className='title-play'>minigames</p>
            <img src={title} alt="" />
        <div className='portada-img-play'>
            <div className='container-btn-play'>
                <button onClick={() => navigate('memory')} className='btn-play'><i className="fa-solid fa-circle-play"></i>MEMORY</button>
                <button onClick={() => navigate('guess')} className='btn-play'><i className="fa-solid fa-circle-play"></i>GUESS</button>
                <button onClick={() => navigate('/pokedex')} className='btn-play' >GO TO POKEDEX</button>
            </div>
        </div>

        </div>
    </section>
  )
}

export default PlayGameScreen   