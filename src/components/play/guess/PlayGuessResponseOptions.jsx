import React from 'react'


const PlayGuessResponseOptions = ({response, pokemonOptions, pokemonSelected, sendPokemon, isRessCorrect, isRessWrong}) => {


    return (
        <ul className='play-pokedex__response-options'>
        {
            pokemonOptions?.map(name => (
                <li 
                    key={name}
                    onClick={() => sendPokemon(name)} 
                    className={`play-pokedex__response-options__items ${pokemonSelected === name && response === name && isRessCorrect || isRessWrong && name === response ? 'play-pokedex__response-options__items-valid' : isRessWrong && pokemonSelected === name && response != name ? 'play-pokedex__response-options__items-invalid' : '' }`}
                    style={{color: `${(isRessWrong && (name != response)) ? '#696565' : ''}`}}
                >
                {name}
                </li>
            ))
        }
    </ul>
    )

}

export default PlayGuessResponseOptions