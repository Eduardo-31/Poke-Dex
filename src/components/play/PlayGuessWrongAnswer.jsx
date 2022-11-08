import React from 'react'
import psyduck from '../img/3-psyduck.png'

const WrongAnswer = ({isRessWrong}) => {

  

  return (
    
  
        <div className={isRessWrong?"card-ress-incorrect-play card-ress-incorrect-play_active": "card-ress-incorrect-play"}>
            <div className='card-img-ress-incorrect'>
                <img src={psyduck} alt="" />
            </div>
            <p>!Incorrect!</p>
                <p>Wrong answer, keep trying </p> 
                <p>remember to use hyphen (-) for space ( )</p>
                <a className='ress-incorrect-icon'><i className="fa-solid fa-triangle-exclamation"></i></a>
        </div>

  )
}

export default WrongAnswer