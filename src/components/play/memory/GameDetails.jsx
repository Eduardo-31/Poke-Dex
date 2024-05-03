import React from 'react'
import Chronometer from './Chronometer'


const GameDetails = ({gameMode, isPlay, time, setTime, shift, results, playerOneResults, playerTwoResults}) => {
    return (
        gameMode === 'multiplayer' ?
        <div className='memory-game__main-multiplayer'>
            <div className={`memory-game__main-multiplayer__card ${isPlay && shift % 2 == 1 && 'memory-game__main-multiplayer__card-one-active'}`}>
            <div className='memory-game__main-player-multiplayer__border'></div>
            <div className='memory-game__main__player__content'>
                <span>Player 1</span>
                <p style={ isPlay && (shift % 2 === 1) ?  { color: 'white'} : {color: '#3663AC'}}>Pairs: { playerOneResults / 2 } </p>
            </div>
            <div className='memory-game__main-player-multiplayer__border'></div> 
            </div>
            <div className={`memory-game__main-multiplayer__card ${isPlay && shift % 2 == 0 && 'memory-game__main-multiplayer__card-two-active'}`}>
            <div className='memory-game__main-player-multiplayer__border'></div>
                <div className='memory-game__main__player__content'>
                    <span>Player 2</span>
                    <p style={ isPlay && (shift % 2 === 0) ?  { color: 'white'} : {color: '#EE3131'}}>Pairs:  { playerTwoResults / 2 } </p>
                </div>
                <div className='memory-game__main-player-multiplayer__border'></div>
            </div>
        </div>
        :
        <div className='memory-game__main-player'>
            <div className='memory-game__main-player__card'>
            <div className='memory-game__main-player-multiplayer__border'></div>
            <span>errors: { shift - results / 2 -1  } </span>
            <div className='memory-game__main-player-multiplayer__border'></div>
            </div>
            <div className='memory-game__main-player__card'>
            <div className='memory-game__main-player-multiplayer__border'></div>
            <span>pairs: { results / 2 }</span>
            <div className='memory-game__main-player-multiplayer__border'></div>
            </div>
            <div className='memory-game__main-player__card'>
            <div className='memory-game__main-player-multiplayer__border'></div>
            <span>shifts: { shift } </span>
            <div className='memory-game__main-player-multiplayer__border'></div>
            </div>
            <Chronometer time={time} setTime={setTime} />
        </div>
    )
}

export default GameDetails