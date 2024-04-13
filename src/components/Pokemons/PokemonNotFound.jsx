import React from 'react'
import psyduck from '../img/psyduck-pokemon-not-found.gif'

const PokemonNotFound = () => {
    return (
        <div className='card-search_error'>
            <div className='img-search_error'>
                <img src={psyduck} alt="image error search" />
            </div>
            <p className='search-error_bold'>Sorry, pokemon not found "dwwdw"</p>
            <p>choose another pokemon trainer, you can also choose by type</p>
        </div> 
    )
}

export default PokemonNotFound