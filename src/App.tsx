
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'

import Home from './pages/Home'

import SimulacaoPage from './pages/SimulacaoPage'
import RotaTeste from './pages/RotaTeste'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="simulacao/:prazo/:valor" element={<SimulacaoPage/>} />
        <Route path="teste/:valor" element={<RotaTeste/>} />
      </Route>
    </Routes>
     
    </Router>
  )
}

export default App
