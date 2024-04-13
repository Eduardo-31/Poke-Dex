import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../footer/Footer'
import LoadingPage from '../LoadingPage/LoadingPage'
import GoToPokedex from '../play/GoToPokedex'
import PokemonError from './PokemonError'

const PokemonInfo = () => {

  const [pokeInfo, setPokeInfo] = useState()
  const [pokemonError, setPokemonError] = useState(false)
  const [loadingPage, setLoadingPage] = useState(true)

  const {name} = useParams()
  const nameUser = useSelector(state => state.nameUser)
  
  const pokemonInfo = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(res => {
      setPokemonError(false)
      setPokeInfo(res.data)
      setLoadingPage(false)
    })
    .catch(err => {
      setPokemonError(true)
      console.log(err)
      setLoadingPage(false)
    })   
  }
  
  useEffect(() => {
    setLoadingPage(true)
    pokemonInfo()
  }, [name])
  
  if(loadingPage){
    return <LoadingPage />
  }

  if(pokemonError) {
    return <PokemonError />
  }
  
  if(pokeInfo){
  return <>
      <section className={`section-info ${pokeInfo?.types[0].type.name}`}>


        <div className='container-info'>
            <GoToPokedex />
        
          <div className='subtitle-poke-info'>
            <h4> <span className='name-info'>{localStorage.getItem('name')},</span> <span>{name}</span> is a {pokeInfo?.types.map((type, index) => (
              <span key={type.type.name}> 
              {index === 0 ? type.type.name + ' ': type.type.name} 
              </span>
              ))} type Pokemon
            </h4>
          </div>
          
          <div className='d-flex'>

            <div className='card-info-img-cool'>
              <div className={`card-info-img card-info-img-${pokeInfo?.types[0].type.name}`}>
                  <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
              </div>
            </div>

            <div className='card-info'>
              <h5>{pokeInfo?.name} </h5>

              <div className='d-flex-content-info'>
     
                <div className='col-50-info'>
                  <div className='d-flex-colum-info'>
                    <span className='span-info'>Weight</span>
                    <p className='text-info'>{(pokeInfo?.weight * 0.1).toFixed(1)} kg</p>
                
                  </div>
                  <div className='d-flex-colum-info'>
                    <span className='span-info'>Height</span>
                    <p className='text-info'> {(pokeInfo?.height / 10).toFixed(1)} m</p>
                  </div>

                </div>

                <div className='col-50-info col-57-min-350'>
                  <div className='d-flex-colum-info'>
                    <span className='span-info'>Abilities</span>
                    <p className='d-flex-ability'>
                      {
                      pokeInfo?.abilities.map(ability => (<span className={`ability-info`} key={ability.ability.name}> {ability.ability.name} </span>))
                      }
                    </p>
                  </div>

                  <div className='d-flex-colum-info'>
                    <span className='span-info'>Type</span>
                    <p className='d-flex-types'>
                    {
                      pokeInfo?.types.map(type => (<span className={`types-info ${type.type.name}`} key={type.type.name} > {type.type.name} </span>))
                    }
                    </p>
                  </div>
                </div>

              </div>        
            </div>

          </div>


          <section className='container-skills'>

          <div className="skills">
              <span className='skill-title'>My Skills Stats</span>
              {
                pokeInfo?.stats.map(stat => (
                  <div className="skill" key={stat.stat.name}>
                    <div className="skill-name"> {stat.stat.name} </div>
                    <div className="skill-bar">
                      <div className="skill-percentage" per={`${stat.base_stat}%`} style={{maxWidth: `${stat.base_stat / 2}%`}}></div>
                    </div>
                  </div>
                ))
              }       

          </div>
          </section>


        </div>
              
      </section>
      <Footer />   
      </>
    
  }
}

export default PokemonInfo