import React from 'react'

const MemoryGameFooter = ({level, setLevel, gameMode, setGameMode, setIsLoading, isLoading, resetChronometer, setIsPlay, resetResult, resetShift}) => {
    
    const selectedLevel = (value) => {
        if(!isLoading && level !== value){
            setIsPlay(false)
            setIsLoading(true)
            setLevel(value)
            resetChronometer()
            resetResult()
            resetShift()
        }
    }
    
    const selectedGameMode = (value) => {
        if(gameMode !== value){
            setIsPlay(false)
            setGameMode(value)
            resetChronometer()
            resetResult()
            resetShift()
        }
    }


  return (
    <div className='memory-game__footer'>
        <div className='memory-game__footer__game-mode'>
            <span className='memory-game__footer__game-mode__title'>game mode</span>
            <div className='memory-game__footer__game-mode__items'>
                <span className={gameMode === 'player' ? 'memory-game__footer__items__span memory-game__footer__item__active' : 'memory-game__footer__items__span'}  onClick={() => selectedGameMode('player')}>Player</span>
                <span className={gameMode === 'multiplayer' ? 'memory-game__footer__items__span memory-game__footer__item__active' : 'memory-game__footer__items__span'} onClick={() => selectedGameMode('multiplayer')}>Multiplayer</span>
            </div>
        </div>
        <div className='memory-game__footer__level'>
            <span className='memory-game__footer__level__title'>level</span>
            <div className='memory-game__footer__level__items'>
                <span className={level === '4x4' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('4x4')}>4x4</span>
                <span className={level === '4x5' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('4x5')}>4x5</span>
                <span className={level === '5x4' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('5x4')}>5x4</span>
                <span className={level === '5x6' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('5x6')}>5x6</span>
                <span className={level === '6x4' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('6x4')}>6x4</span>
                <span className={level === '6x6' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('6x6')}>6x6</span>
                <span className={level === '6x7' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('6x7')}>6x7</span>
                <span className={level === '7x6' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('7x6')}>7x6</span>
                <span className={level === '7x8' ? 'memory-game__footer__items__span memory-game__footer__item__active ' : 'memory-game__footer__items__span'} onClick={() => selectedLevel('7x8')}>7x8</span>
            </div>
        </div>
    </div>
  )
}

export default MemoryGameFooter