import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import getAllPokedexApi from '../../hooks/getAllPokedexApi'
import CardPokemons from './CardPokemons'
import Footer from '../footer/Footer'
import Pagination from './pagination/Pagination'

import poketitle from '../img/timg-title.png'
import psyduck from '../img/2-psyduck.png'




const PokedexScreen = () => {
  
  const arrayTypes = [
    "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water","grass","electric","psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]
  
  
  const [search, setSearch] = useState()
  const [isType, setIsType] = useState()
  const [searchError, setSearchError] = useState(false)
  
  const {pokemons, setPokemons} = getAllPokedexApi(isType,setSearchError)
  
  
  const [currentPage, setCurrentPage] = useState(1)



  const navigate = useNavigate()

  const name = useSelector(state => state.nameUser)
  

    const submit = (e) => {
      
       
            e.preventDefault()
            console.log(e.target.children[0].value.toLowerCase())
            setSearch(e.target.children[0].value.toLowerCase())
            setPokemons()
            Form.reset() 
            setSearchError(false)

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
   
      setPokemons()     

      }
 
      
    const changeType = () => {
      
      setIsType(xx.value)
      setPokemons()
      setSearch(false)

    }


   
    

  return (
    <div>
      <header className='container-header'>
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
          <option value={''}>search by type</option>
            
          

          {

            arrayTypes.map(arrayType => (
            <option className='option' key={arrayType}>
              {arrayType}
            </option>))
      
            }
        
          </select>
        </div>

        <button onClick={goToMiniPlay} className='icon-to-play'><i className="fa-solid fa-gamepad"></i></button>

      </header>
        
      <main className={search && 'padding-60'}>

        {
          searchError  &&  
          <div className='card-search_error'>
        <div className='img-search_error'>
            <img src={psyduck} alt="image error search" />
        </div>
        <p className='search-error_bold'>Sorry, pokemon not found</p>
        <p>choose another pokemon trainer, you can also choose by type</p>
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
          allPokemon={allPokemon }
          />
        ))
    
        }


        {
          search && <CardPokemons  search={search} setSearchError={setSearchError} />
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
        
        <Footer />

    </div>
  )
}

export default PokedexScreen