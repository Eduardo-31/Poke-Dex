import React from 'react'
import ReactDOM from 'react-dom/client'
// Styles CSS
import App from './App'
import './index.css'
import './components/footer/StyleFooter.css'
//import './components/play/Styles/PlayStartHome.css'
import './components/Pokemons/pagination/Pagination.css'
import './components/404/Error404.css'
import './components/home/Home.css'
import './components/Pokemons/SearchError.css'

// Redux
import { Provider } from 'react-redux'
import store from './store'
// React Router
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  //</React.StrictMode>
)
