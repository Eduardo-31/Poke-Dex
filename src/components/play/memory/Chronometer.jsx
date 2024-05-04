import React, { useEffect } from 'react'

const Chronometer = ({time}) => {

    
    const date = new Date(time)
    
    let hours = date.getUTCHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(hours < 10){ hours = '0' + hours}
    if(minutes < 10){ minutes = '0' + minutes}
    if(seconds < 10){ seconds = '0' + seconds}
    
  return (
    <div className='memory-game__main-player__card'>
      <div className='memory-game__main-player-multiplayer__border'></div>
       <span>{`${hours}:${minutes}:${seconds}`}</span>  
      <div className='memory-game__main-player-multiplayer__border'></div>
    </div>
  )
}

export default Chronometer