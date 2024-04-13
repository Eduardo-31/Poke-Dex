import React from 'react'

import ashandpikachu from '../../img/ashandpikachu.png'

const CorrectAnswer = ({isRessCorrect, gameMode, correctAnswers}) => {

  return (
    <div className={isRessCorrect ? "card-ress-correct-play card-ress-correct-play_active": "card-ress-correct-play"}>
        <div className='card-img-ress-correct'>
            <img src={ashandpikachu} alt="image" loading='lazy' />
        </div>
        <p>¡Correct!</p>
        <p>Congratulations, your answer is correct, keep it up.</p>
        {
          gameMode === 'option' && 
          <p>total success: {correctAnswers + 1}</p>
        }
        <a className='ress-correct-icon'><i className="fa-solid fa-circle-check"></i></a>
    </div>
  )
}

export default CorrectAnswer