import React from 'react'
import * as S from './style';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Sobre from './pages/Sobre/sobre'
import Projetos from './pages/Projetos/projetos'

export default function App() {
  return (
    <> 
      <S.GlobalStyle />
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/sobre' element={<Sobre />} />
           <Route path='/projetos' element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
