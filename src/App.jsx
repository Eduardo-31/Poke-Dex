import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import CardPokemons from './components/Pokemons/CardPokemons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PokedexScreen from './components/Pokemons/PokedexScreen'
import PokemonInfo from './components/Pokemons/PokemonInfo'
import Footer from './components/footer/Footer'
import ProtectedRoutes from './components/ProtectedRoutes.jsx/ProtectedRoutes'
import PlayGuessPokedexScreen from './components/play/PlayGuessPokedexScreen'
import PlayStart from './components/play/PlayStartHome'
import Error404 from './components/404/Error404'



function App() {

  const [isLogged, setIsLogged] = useState(false)


  return (
    <div className="App">
      
      <Routes>
        <Route path={'/'} element={<Home  
          setIsLogged={setIsLogged} />} />
        <Route element={<ProtectedRoutes
          isLogged={isLogged} />}>
          <Route path={'/pokedex'}>
            <Route index element={<PokedexScreen />} />
            <Route path={':name'} element={<PokemonInfo />} />
            <Route path={'error404'} element={<h2> Pagina no encontrada</h2>} />
            <Route path='play'>
              <Route index element={<PlayStart />} />
              <Route path={'guess'} element={<PlayGuessPokedexScreen />} />
            </Route>
          </Route>
        </Route>  
        <Route path={'*'} element={<Error404 />} />
      </Routes>

    </div>
  )
}

export default App
