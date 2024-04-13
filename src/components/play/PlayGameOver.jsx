import React from 'react'
import pokebola from '../img/pixelated-pokebola.png'
import './styles/PlayGameOver.css'

const arrNote = ['very bad', 'bad', 'normal', 'good', 'very good']

const PlayGameOver = ({success, failed}) => {

    const name = localStorage.getItem('name')


  return (
    <div className='game-over-container'>
        <div className='game-over'>
            <div className='game-over__header'>
                <a><i class="fa-solid fa-caret-down"></i></a>
                <p>game information</p>
            </div>
            <div className='game-over__main'>
                <div className='game-over__main__name'>
                    <div className='game-over__main__name__header'>
                        <img src={pokebola} alt="" />
                        <span>000</span>
                        <p>Name</p>
                    </div>
                    <p className='game-over__main__name__content'>
                        { name }
                    </p>

                </div>

                <div className='game-over__main__detail'>
                    <div className='game-over__main__detail__text'>
                        <span> {success}/20</span>
                        <a> { arrNote[Math.floor(success / 5)]   }  </a>
                        <p>score: {success} </p>
                    </div>
                    <div>
                        <img src="https://alicnik.github.io/pokeapi/1ca1ca0a09c055b43c402d89adab7d14.gif" alt="" />
                    </div>
                </div>

                <div className='game-over__main__result'>
                    <div className='game-over__main__result-group'>
                        <span>SUCCESS</span>
                        <p> {success} </p>
                    </div>
                    <div className='game-over__main__result-group-line'></div>
                    <div className='game-over__main__result-group'>
                        <span>FAILED</span>
                        <p> {failed} </p>
                    </div>
                </div>
            </div>
            <div className='game-over__footer'>
                <div className='game-over__footer__border'></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ut saepe hic labore in sunt obcaecati rerum molestiae eius soluta sit tenetur dolore possimus, ullam eaque quisquam est impedit.</p>
                <div className='game-over__footer__border'></div>
            </div>
        </div>
    </div>
  )
}

export default PlayGameOver