import React from 'react'
import IconComputador from '../../assets/iconComputador.png'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <>
     <header>
      <div>
        <img src={IconComputador} alt='Icone Computador' />
        <div>
          <p>Guilherme</p>
          <p>Dev</p>
        </div>
      </div>
      <nav>
        <Link to='/'>Home</Link> 
        <Link to='/sobre'>Sobre</Link> 
        <Link to='/projetos'>Projetos</Link> 
        <Link to='/contato'>Contato</Link>
      </nav>
     </header>
    </>
  )
}
