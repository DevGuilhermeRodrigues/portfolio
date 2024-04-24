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
          <p className='logo-name'>Guilherme</p>
          <p className='logo-name'>Dev</p>
        </div>
      </S.ContainerLogo>

      <S.Menu>
        <Link to='/' className='link-menu'>Home</Link> 
        <Link to='/sobre' className='link-menu'>Sobre</Link> 
        <Link to='/projetos' className='link-menu'>Projetos</Link> 
      </S.Menu>
     </S.Header>
    </>
  )
}
