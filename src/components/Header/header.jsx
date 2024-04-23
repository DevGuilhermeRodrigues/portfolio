import React from 'react'
import * as S from './header_styled'
import IconComputador from '../../assets/iconComputador.png'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <>
     <S.Header>
      <S.ContainerLogo>
        <img src={IconComputador} alt='Icone Computador' />
        <div>
          <p>Guilherme</p>
          <p>Dev</p>
        </div>
      </S.ContainerLogo>

      <S.Menu>
        <Link to='/'>Home</Link> 
        <Link to='/sobre'>Sobre</Link> 
        <Link to='/projetos' className='linkProjetos'>Projetos</Link> 
        <Link to='/contato'>Contato</Link>
      </S.Menu>
     </S.Header>
    </>
  )
}
