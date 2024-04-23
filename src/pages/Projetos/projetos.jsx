import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import * as S from './projetos_styled'
import ProjetoMec from '../../assets/projeto-mec.png'
import ProjetoNature from '../../assets/projeto-nature.png'
import ProjetoSelfCare from '../../assets/projeto-selfcare.png'

export default function projetos() {

  const projetos = [
    {
      id: 1,
      nome: 'Projeto Mec Donalds',
      skill: 'React js | Styled-Components',
      imagem: ProjetoMec,
      projeto: 'https://projeto-mec.vercel.app/',
      repositorio: 'https://github.com/DevGuilhermeRodrigues/Project-Mac-VNW'
    },

    {
      id: 2,
      nome: 'Land Page Nature',
      skill: 'Html | Css',
      imagem: ProjetoNature,
      projeto: 'https://land-page-nature.vercel.app/',
      repositorio: 'https://github.com/DevGuilhermeRodrigues/LandPageNature'
    },
    
    {   
      id: 3,
      nome: 'Projeto Self-Care',
      skill: 'Html | Css',
      imagem: ProjetoSelfCare,
      projeto: 'https://self-care-smoky.vercel.app/',
      repositorio: 'https://github.com/DevGuilhermeRodrigues/SelfCare-Vai-na-Web'
    }
  ]

  return (
    <>
      <Header />
      <S.ContainerSection>
        <h1>Meus Projetos</h1>

        <S.ContainerListProjetos>
          {
            projetos.map((func, id) => (
              <S.ContainerProjeto>
                <img src={func.imagem} alt='projeto mec' />
                <h2>{func.nome}</h2>
                <div>
                  <a href={func.projeto} target='blank'>Projeto</a>
                  <a href={func.repositorio} target='blank'>Repositório</a>
                </div>
              </S.ContainerProjeto>
            ))
          }
        </S.ContainerListProjetos>
      </S.ContainerSection>
      <Footer/>
    </>
  )
}
