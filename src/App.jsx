import React from 'react'
import Contact from './contents/Contact'
import Search from './components/Search'
import Services from './contents/Services'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function Home(){
return <h2>Accueil</h2>
}
function About(){
  return <h2>A propos</h2>
}

function App() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
          <li>  
            <Link to="/">Accueil</Link>
          </li>
          <li>
          <Link to="/apropos">A propos</Link>
          </li>
          <li>  
          <Link to="/contact">Contact</Link>
          </li>
          <li>  
            <Link to="/services">Services</Link>
          </li>
          </ul>
          <Search/>
        </nav>
        <div>Search</div>

        <Routes>
          
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/apropos" element={<About/>} />
          <Route path="/"element={<Home/>} />  
        </Routes>
      </div>
    </Router>
  )
}

export default App
