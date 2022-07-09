import React from 'react'

import ashandpikachu from '../img/ashandpikachu.png'

const CorrectAnswer = ({isRessCorrect}) => {

  return (
                   <div className={isRessCorrect?"card-ress-correct-play card-ress-correct-play_active": "card-ress-correct-play"}>
            <div className='card-img-ress-correct'>
                <img src={ashandpikachu} alt="" />
            </div>
            <p>¡Congratulations Trainer!</p>
                <p>Your answer is correct, keep it up</p>
                <a className='ress-correct-icon'><i className="fa-solid fa-circle-check"></i></a>
        </div>

    

  )
}

export default CorrectAnswer