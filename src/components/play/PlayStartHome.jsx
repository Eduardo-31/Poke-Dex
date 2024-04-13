import React from 'react'
import { useNavigate } from 'react-router-dom'
import title from '../img/pokedex.png.png'
import './styles/PlayStartHome.css'
import imagePlayHome from '../img/bg-play-home.jpg'

const PlayStart = () => {

    const navigate = useNavigate()

  return (
    <section className='container-play'>
        
        <div className='section-play'>
        <p className='title-play'>minigames</p>
            <img src={title} alt="" />
        <div className='portada-img-play'>
            <img src="https://i.ytimg.com/vi/dKY7TBt-dd4/maxresdefault.jpg" alt="" />

            <div className='container-btn-play'>
                <button onClick={() => navigate('guess')} className='btn-play'><i className="fa-solid fa-circle-play"></i>JUGAR</button>
                <button onClick={() => navigate('/pokedex')} className='btn-play' >GO TO POKEDEX</button>
            </div>
        </div>

        </div>
    </section>
  )
}

export default PlayStart