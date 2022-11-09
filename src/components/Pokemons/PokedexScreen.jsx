import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import getAllPokedexApi from '../../hooks/getAllPokedexApi'
import CardPokemons from './CardPokemons'
import Footer from '../footer/Footer'
import Pagination from './pagination/Pagination'
import './SearchLoading.css'

import poketitle from '../img/timg-title.png'
import psyduck from '../img/2-psyduck.png'
import pokebola from '../img/poke.png'
import { setLoaderSearchPokemon } from '../../slices/loaderSearchPokemon.slice'
import { setLoaderPokemon } from '../../slices/loaderPokemon.slice'



const PokedexScreen = () => {
  
  const arrayTypes = [
    "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water","grass","electric","psychic", "ice", "dragon", "dark", "fairy"]
  
  
  const [search, setSearch] = useState()
  const [isType, setIsType] = useState()
  const [searchError, setSearchError] = useState(false)
  
  const {pokemons, setPokemons} = getAllPokedexApi(isType,setSearchError,search, setIsType)
  
  
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loadingSearchPokemon = useSelector(state => state.loaderSearch)
  const loaderPokemons = useSelector(state => state.loaderPokemon)
  
    //console.log('estate search loading: ',loadingSearchPokemon)
    const submit = (e) => {
      e.preventDefault()
      if(e.target.children[0].value.replace(/\s/g,'').length){
        //dispatch(setLoaderSearchPokemon(true))
        e.preventDefault()
        if(e.target.children[0].value.replace(/\s/g,'') !== search){
          e.preventDefault() 
          console.log('submit',e.target.children[0].value.toLowerCase())
          setSearch(e.target.children[0].value.toLowerCase())
          setSearchError(false)
          setIsType(null)
          setPokemons(null)
          Form.reset()
          dispatch(setLoaderSearchPokemon(false))
          setIsType(xx.value = '')
        }
        Form.reset()
      }
    }
    



    
    const goToMiniPlay = () => {
      navigate('/pokedex/play')
    }



    
    // logic Pagination

    
    let arrayPokemon = []
    const pokemonPerPage = 24
    if(pokemons?.length < pokemonPerPage){
      arrayPokemon = [...pokemons]
    } else {
        const lastpokemon = currentPage * pokemonPerPage
        arrayPokemon = pokemons?.slice(lastpokemon - pokemonPerPage, lastpokemon)
      }
      
      let arrayPages = []
      let quantityPages = Math.ceil(pokemons?.length / pokemonPerPage) // 11 = cantidad paginas máximas
      const pagesPerBlock = 5
      let currentBlock = Math.ceil(currentPage / pagesPerBlock) // 2 = segundo bloque
      // Analiza si estamos en el último(true) o no(false)
      if(currentBlock * pagesPerBlock >= quantityPages){
        // Cuando es el último bloque
        for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
          arrayPages.push(i)
        }
      } else {
        // cuando no es el último bloque
        for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
          arrayPages.push(i)
        }
      }
      
      const allPokemon = () => {
        if(!loadingSearchPokemon && !loaderPokemons){
          setSearchError(false)
          dispatch(setLoaderPokemon(false))
          dispatch(setLoaderSearchPokemon(false))
          setIsType(null)
          setSearch(null)
          setCurrentPage(1)
          //setPokemons(null)
          setIsType(xx.value = '')
          Form.reset()
        }
      }
 
      
    const changeType = () => {
      setCurrentPage(1)
      setIsType(xx.value)
      setPokemons()
      setSearch(null)
      Form.reset()
    }

    const removeUser = () => {
      localStorage.removeItem('name')
      navigate('/')
    }

  return (
    <div>
      <div className='pokedex-Screen-container'>

      
      <header className='container-header'>
        <div style={{maxWidth: '1670px', margin:'0 auto', position: 'relative'}}>

        <div className='img-title-header'>
        <img src={poketitle} alt="title.." />
        </div>    
        <section className='subtitle-header'>
        <p><span>Welcome</span> <span className='name-header'> {localStorage.getItem('name')}, </span> here you can find your favorite pokemon. </p>
        </section>

        <form className='form-header-pokedex' onSubmit={submit} id='Form'>
          <input className='input-form' type="text" />
          <button className='btn-form'>Buscar</button>
        </form>

        <div className='container-select'>
          


          <select className='select' onChange={changeType} id="xx">
         { /*<option value={'dwqqwd'}>search by type</option>*/}
            

          {
            
            arrayTypes.map(arrayType => (
              <option className='option' key={arrayType}>
              {arrayType}
            </option>))
      
    }
        
          </select>
          {       
            isType || search ? <button className='btn-allpokemon' onClick={allPokemon}>All Pokedex</button> : undefined
          }
          <div className='pokebola-header'>
            <img src={pokebola} alt="" />
          </div>

        </div>
        </div>

        <button onClick={goToMiniPlay} className='icon-to-play'><i className="fa-brands fa-playstation"></i></button>
        <button onClick={removeUser} className='icon-exit'><i className="fa-solid fa-right-from-bracket"></i></button>
        
      </header>


      <main className={search && 'padding-60'}>

        {
          searchError   &&  
          <div className='card-search_error'>
        <div className='img-search_error'>
            <img src='https://i.gifer.com/8R5e.gif' alt="image error search" />
        </div>
        <p className='search-error_bold'>Sorry, pokemon not found</p>
        <p>choose another pokemon trainer, you can also choose by type</p>
          </div>        
        }

        {
          loadingSearchPokemon && 
          <div className='loading-search'>
            <div style={{height: '85%'}}>
              <div className='loading-search-img'>
                <img src='http://img4.wikia.nocookie.net/__cb20140430000041/fantendo/images/4/48/Pikachu_running_animation_by_cadetderp-d5407a9.gif' alt="loading pokebola" />
              </div>
              <p>Loading...</p>
            </div>
          </div>
        
        }


        { arrayPokemon &&
        <Pagination 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        quantityPages={quantityPages}  
        arrayPages={arrayPages}
        currentBlock={currentBlock}
        pagesPerBlock={pagesPerBlock}
        isType={isType}
        />
        }

        <section className='container-card'>

        
        {
          
          
          arrayPokemon?.map(pokemon => (
          <CardPokemons 
          key={!isType === true ? pokemon.url : pokemon.pokemon.url} 
          pokemon={!isType === true ? pokemon.url : pokemon.pokemon.url} 
          search={search}
          isType={isType}
          setSearchError={setSearchError}
          submit={submit}
          />
        ))
    
        }


        {
          search && <CardPokemons submit={submit} search={search} setSearchError={setSearchError} />
        }      
          
        </section> 

        { arrayPokemon &&
        <Pagination 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        quantityPages={quantityPages}  
        arrayPages={arrayPages}
        currentBlock={currentBlock}
        pagesPerBlock={pagesPerBlock}
        />
        }
       
      </main>
      </div>
         <Footer />

    </div>
  )
}

export default PokedexScreen