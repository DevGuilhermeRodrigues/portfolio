import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Sobre from './pages/Sobre/sobre'
import Projetos from './pages/Projetos/projetos'
import Contato from './pages/Contato/contato'

export default function App() {
  return (
    <> 
      
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/sobre' element={<Sobre />} />
           <Route path='/projetos' element={<Projetos />} />
           <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
