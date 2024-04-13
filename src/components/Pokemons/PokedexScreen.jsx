import React, { useRef, useState } from 'react'
import getAllPokedexApi from '../../hooks/getAllPokedexApi'
import CardPokemons from './CardPokemons'
import Footer from '../footer/Footer'
import Pagination from './pagination/Pagination'
import './SearchLoading.css'

import PokemonNotFound from './PokemonNotFound'
import PokemonHeader from './PokemonHeader'
import pikachuRunning from '../img/pikachu-running.gif'




const PokedexScreen = () => {
  
  
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [loadingPokemons, setloadingPokemons] = useState(true)
  
  
  const [currentPage, setCurrentPage] = useState(1)

  const {pokemons, setPokemons} = getAllPokedexApi(type, search, setloadingPokemons)
  const searchIconRef = useRef()


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
      if(!loadingPokemons){
        setCurrentPage(1)
        setType('')
        if(search){
          setSearch('')
          searchIconRef.current.classList.remove('form-pokedex__icon-isShow')
        }
      }
    }
 
    const changeType = (value) => {
      console.log('change')
      setloadingPokemons(true)
      setType(value)
      setSearch('')
      setCurrentPage(1)
    }

    const handleSearch = (e) => {
      const value = e.target.value
      if(value.replace(/\s/g,'').length){
        if(pokemons?.length != 0){
          setloadingPokemons(true)
        }
        setSearch(value.toLowerCase())
        setCurrentPage(1)
      }
      
      if(search && value.toLowerCase() == ''){
        setloadingPokemons(true)
        setSearch('')
      }
    }

    console.log('renderizado')
    console.log(pokemons)
    console.log(arrayPokemon)

  return (
    <div onClick={() => !search && searchIconRef.current.classList.remove('form-pokedex__icon-isShow')}>
      <div className='pokedex-screen-container'>
      
      <PokemonHeader 
        allPokemon={allPokemon}
        changeType={changeType}
        handleSearch={handleSearch}
        type={type}
        search={search}
        searchIconRef={searchIconRef}
      />

      <main className={(loadingPokemons || (pokemons?.length <= pokemonPerPage)) ? 'padding-60' : undefined}>

        {
          (!pokemons?.length && !loadingPokemons && search) &&  
          <PokemonNotFound />     
        }

          <div style={{display: `${loadingPokemons ? 'flex' : 'none'}`}} className='loading-search'>
            <div style={{height: '85%'}}>
              <div className='loading-search-img'>
                <img src={pikachuRunning} alt="pikachu image" loading='lazy'/>
              </div>
              <p>Loading...</p>
            </div>
          </div>


        { (pokemons?.length > pokemonPerPage) && !loadingPokemons &&
            <Pagination 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            quantityPages={quantityPages}  
            arrayPages={arrayPages}
            currentBlock={currentBlock}
            pagesPerBlock={pagesPerBlock}
            type={type}
          />
        }

        <section className='container-card'>

        {  
          !loadingPokemons && arrayPokemon?.map(pokemon => (
            <CardPokemons 
            key={type ? pokemon.pokemon.url : pokemon.url } 
            pokemon={type ? pokemon.pokemon.url : pokemon.url }
            search={search}
            type={type}
            />
          ))
        }

        </section> 

        { (pokemons?.length > pokemonPerPage) && !loadingPokemons &&
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