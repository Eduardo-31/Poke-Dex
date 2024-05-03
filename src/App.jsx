import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import PokedexScreen from './components/Pokemons/PokedexScreen'
import PokemonInfo from './components/Pokemons/PokemonInfo'
import ProtectedRoutes from './components/ProtectedRoutes.jsx/ProtectedRoutes'
import Error404 from './components/404/Error404'
import PlayGameScreen from './components/play/PlayGameScreen'
import GuessGameScreen from './components/play/guess/GuessGameScreen'
import MemoryGameScreen from './components/play/memory/MemoryGameScreen'



function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={'/pokedex'}>
            <Route index element={<PokedexScreen />} />
            <Route path={':name'} element={<PokemonInfo />} />
            <Route path='play'>
              <Route index element={<PlayGameScreen />} />
              <Route path={'guess'} element={<GuessGameScreen />} />
              <Route path={'memory'} element={<MemoryGameScreen />} />
            </Route>
          </Route>
        </Route>  
        <Route path={'*'} element={<Error404 />} />
      </Routes>

    </div>
  )
}

export default App
