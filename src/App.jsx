import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import PokedexScreen from './components/Pokemons/PokedexScreen'
import PokemonInfo from './components/Pokemons/PokemonInfo'
import ProtectedRoutes from './components/ProtectedRoutes.jsx/ProtectedRoutes'
import PlayGuessScreen from './components/play/guess/PlayGuessScreen'
import PlayStart from './components/play/PlayStartHome'
import Error404 from './components/404/Error404'



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
              <Route index element={<PlayStart />} />
              <Route path={'guess'} element={<PlayGuessScreen />} />
            </Route>
          </Route>
        </Route>  
        <Route path={'*'} element={<Error404 />} />
      </Routes>

    </div>
  )
}

export default App
