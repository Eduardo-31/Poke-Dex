import React from 'react'
import psyduck from '../../img/3-psyduck.png'

const WrongAnswer = ({isRessWrong, gameMode, wrongAnswers}) => {

  

  return (
    <div className={isRessWrong ? "card-ress-incorrect-play card-ress-incorrect-play_active": "card-ress-incorrect-play"}>
        <div className='card-img-ress-incorrect'>
            <img src={psyduck} alt="" />
        </div>
        <p>¡Incorrect!</p>
            <p>Failed response, keep trying </p> 
            <p>{ gameMode === 'option' ? `total errors: ${wrongAnswers + 1}` : 'remember to use hyphen (-) for space ( )'}</p>
       
            <a className='ress-incorrect-icon'><i className="fa-solid fa-triangle-exclamation"></i></a>
    </div>
  )
}

export default WrongAnswer