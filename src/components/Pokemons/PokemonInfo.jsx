import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import cardPokemonApi from '../../hooks/cardPokemonApi'
import { setPokemonName } from '../../slices/namePokemon.slice'
import Footer from '../footer/Footer'
import pokdex from '../img/poke.png'
import GoToPokedex from '../play/GoToPokedex'

const PokemonInfo = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const [pokeSpecies, setPokeSpecies] = useState()
  const [evolutionUrl, setEvolutionUrl] = useState()

  // estate Evolution
  const [evolutionOne, setEvolutionOne] = useState()
  const [evolutionTwo, setEvolutionTwo] = useState()
  const [evolutionThree, setEvolutionThree] = useState()
  

  const navigate = useNavigate()
  const {name} = useParams()
  
  


  
  
  
  
  
  const pokemonInfo = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(res => setPokeInfo(res.data))
    .catch(err => console.log(err))   
  }
  
  useEffect(() => {
    pokemonInfo()
  }, [name])
  
  
  





/*
  useEffect(() => {
    axios.get(pokeInfo?.species.url)
    .then(res =>  setPokeSpecies(res.data))
    .catch(err => console.log(err))
    
  }, [pokeInfo])
  


  useEffect(() => {
    axios.get(pokeSpecies?.evolution_chain.url)
              .then(res => setEvolutionUrl(res.data))
              .catch(err => console.log(err))    
  }, [pokeSpecies])
  

  
  const one = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionUrl?.chain.species.name}/`)
              .then(res => setEvolutionOne(res.data))
              .catch(err => console.log(err))    
  }

// Peticion Evolution

const two = () => {
   
  axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionUrl?.chain.evolves_to[0].species.name}/`)
            .then(res => setEvolutionTwo(res.data))
            .catch(err => console.log(err))   
}


const three = () => {
  
  axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionUrl?.chain.evolves_to[0].evolves_to[0].species.name}/`)
            .then(res => setEvolutionThree(res.data))
            .catch(err => console.log(err))   
  }
  
  useEffect(() => {
    one()
    two()
    three() 
  }, [evolutionUrl])

  console.log(pokeInfo)
  console.log(pokeInfo?.species.url)
  console.log(pokeSpecies?.evolution_chain.url)
  console.log(pokeSpecies)
  console.log(evolutionUrl)
  console.log(evolutionUrl)
  console.log(evolutionUrl?.chain.evolves_to[0].species.name)
  console.log(evolutionUrl?.chain.evolves_to[0].evolves_to[0].species.name)
  console.log(evolutionOne)
  console.log(evolutionTwo)
  console.log(evolutionThree)
*/
 
  console.log(pokeInfo)
  return (
    
      <>
      <section className={`section-info ${pokeInfo?.types[0].type.name}`}>


        <div className='container-info'>
            <GoToPokedex />
        
          <div className='subtitle-poke-info'>
            <h4> <span className='name-info'>{ localStorage.getItem('name')},</span> <span>{name}</span> is a {pokeInfo?.types.map((type, index) => (
              <span key={type.type.name}> 
              {index === 0 ? type.type.name + ' ': type.type.name} 
              </span>
              ))} type Pokemon
            </h4>
            {/*<img src={pokdex} alt="" />*/}
          </div>
          
          <div className='d-flex'>

            <div className='card-info-img-cool'>
              <div className='card-info-img'>
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
    )
}

export default PokemonInfo