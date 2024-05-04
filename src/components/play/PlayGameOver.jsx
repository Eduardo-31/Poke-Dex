import React from 'react'
import './styles/PlayGameOver.css'
import pokebola from '../img/pixelated-pokebola.png'
import professorOak from '../img/professor-oak.gif'



const arrNote = ['very bad', 'bad', 'normal', 'good', 'very good']

const PlayGameOver = ({gameMode='', success, failed, shifts=20, time}) => {

    const name = localStorage.getItem('name')

    const date = new Date(time)

    let hours = date.getUTCHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(hours < 10){ hours = '0' + hours}
    if(minutes < 10){ minutes = '0' + minutes}
    if(seconds < 10){ seconds = '0' + seconds}



  return (
    <div className='game-over-container'>
        <div className='game-over'>
            <div className='game-over__header'>
                <a><i class="fa-solid fa-caret-down"></i></a>
                <p>game information</p>
            </div>
            <div className={gameMode === 'multiplayer' ? 'game-over__main game-over__main-player-one' : 'game-over__main'}>
                <div className='game-over__main__name'>
                    <div className='game-over__main__name__header'>
                        <img src={pokebola} alt="" />
                        <span>{ gameMode === 'multiplayer' ? '001' : '000'}</span>
                        <p>Name</p>
                    </div>
                    <p className='game-over__main__name__content'>
                        { gameMode === 'multiplayer' ? 'Player One' : name }
                    </p>
                </div>

                <div className='game-over__main__detail'>
                    <div className='game-over__main__detail__text'>
                        <span> { gameMode === 'multiplayer' ? success.playerOne : success}/{gameMode === 'multiplayer' ? shifts.playerOne : shifts}</span>
                        { gameMode === '' && <a> {  arrNote[Math.floor(success / 5)]   }  </a>}
                        { gameMode === 'player' && <a> {`${hours}:${minutes}:${seconds}`} </a>}
                        <p>score: { gameMode === 'multiplayer' ? success.playerOne : success} </p>
                    </div>
                    <div>
                        <img src={professorOak} alt="image" />
                    </div>
                </div>

                <div className='game-over__main__result'>
                    <div className='game-over__main__result-group'>
                        <span>SUCCESS</span>
                        <p> { gameMode === 'multiplayer' ? success.playerOne : success} </p>
                    </div>
                    <div className='game-over__main__result-group-line'></div>
                    <div className='game-over__main__result-group'>
                        <span>FAILED</span>
                        <p> { gameMode === 'multiplayer' ? failed.playerOne : failed} </p>
                    </div>
                </div>
            </div>
            <div className='game-over__footer'>
                <div className='game-over__footer__border'></div>
                <p>{`Hello coach ${gameMode === 'multiplayer' ? 'Player One' : name}, ¡congratulations! You completed the ${gameMode ? 'memory' : 'guessing' } game, we have evaluated your game along with your moves and returned the results that appear on the screen.`} </p>
                <div className='game-over__footer__border'></div>
            </div>

            {
                gameMode === 'multiplayer' &&
                <>
                    <div className='game-over__main game-over__main-player-two'>
                        <div className='game-over__main__name'>
                            <div className='game-over__main__name__header'>
                                <img src={pokebola} alt="" />
                                <span>002</span>
                                <p>Name</p>
                            </div>
                            <p className='game-over__main__name__content'>
                                Player Two
                            </p>
                        </div>

                        <div className='game-over__main__detail'>
                            <div className='game-over__main__detail__text'>
                                <span> {success.playerTwo}/{shifts.playerTwo}</span>
                                <p>score: { success.playerTwo } </p>
                            </div>
                            <div>
                                <img src={professorOak} alt="image" />
                            </div>
                        </div>

                        <div className='game-over__main__result'>
                            <div className='game-over__main__result-group'>
                                <span>SUCCESS</span>
                                <p> { success.playerTwo } </p>
                            </div>
                            <div className='game-over__main__result-group-line'></div>
                            <div className='game-over__main__result-group'>
                                <span>FAILED</span>
                                <p> { failed.playerTwo } </p>
                            </div>
                        </div>
                    </div>
                    <div className='game-over__footer'>
                        <div className='game-over__footer__border'></div>
                        <p>Hello coach Player Two, ¡congratulations! You completed the memory game, we have evaluated your game along with your moves and returned the results that appear on the screen.</p>
                        <div className='game-over__footer__border'></div>
                    </div>
                </>
            }

        </div>
    </div>
  )
}

export default PlayGameOver