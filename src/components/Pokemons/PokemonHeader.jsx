import React from "react"


import poketitle from '../img/timg-title.png'
import psyduck from '../img/2-psyduck.png'
import pokebola from '../img/poke.png'
import { useNavigate } from "react-router-dom"

const arrayTypes = [
    "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water","grass","electric","psychic", "ice", "dragon", "dark", "fairy"
  ]

const PokemonHeader = ({allPokemon, changeType, handleSearch, type, search, searchIconRef}) => {

    const navigate = useNavigate()

    const goToMiniPlay = () => {
        navigate('/pokedex/play')
    }

    const removeUser = () => {
        localStorage.removeItem('name')
        navigate('/')
    }
  


    return (
        <header className='container-header'>
        <div style={{maxWidth: '1670px', margin:'0 auto', position: 'relative'}}>

        <div className='img-title-header'>
        <img src={poketitle} alt="title.." />
        </div>    
        <section className='subtitle-header'>
        <p><span>Welcome</span> <span className='name-header'> {localStorage.getItem('name')}, </span> here you can find your favorite pokemon. </p>
        </section>

        <form  className='form-pokedex-header' id='Form'
          onClick={(e) => {
            e.stopPropagation()
            searchIconRef.current.classList.add('form-pokedex__icon-isShow')
            Form.searchInput.focus()
          }}
          >
         
            <a ref={searchIconRef} className='form-pokedex__icon'><i className="fa-solid fa-magnifying-glass"></i></a>
            <input autoComplete="off" name='searchInput' value={search} onChange={handleSearch} className='form-pokedex__input' type="text" />
            <div className='form-pokedex-header__pokebola'>
              <img src={pokebola} alt="pokebola image" loading='lazy' />
            </div>
        </form>

        <div className='container-select'>
        
          <select value={type} className='select' onChange={(e) => changeType(e.target.value)} id="xx">
            <option className={`option${type == '' ? ' option-active' : ''}`} value=''></option>
            {      
                arrayTypes.map(element => (
                <option
                    className={`option${type == element ? ' option-active' : ''}`}
                    key={element}
                    value={element}
                >
                    {element}
                </option>
                ))
            }
          </select>

          {       
            (type || search) && <button className='btn-allpokemon' onClick={allPokemon}>All Pokedex</button>
          }

          <div className='pokebola-header'>
            <img src={pokebola} alt="image pokedex" loading='lazy'/>
          </div>

        </div>
        </div>

        <button onClick={goToMiniPlay} className='icon-to-play'><i className="fa-brands fa-playstation"></i></button>
        <button onClick={removeUser} className='icon-exit'><i className="fa-solid fa-right-from-bracket"></i></button>
        
      </header>
    )
}

export default PokemonHeader