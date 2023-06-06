
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'

import Home from './pages/Home'

import SimulacaoPage from './pages/SimulacaoPage'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="simulacao/:prazo/:valor" element={<SimulacaoPage/>} />
      </Route>
    </Routes>
     
    </Router>
  )
}

export default App
