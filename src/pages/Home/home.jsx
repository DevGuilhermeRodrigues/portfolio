import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { AiFillGithub } from "react-icons/ai";
// import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import * as S from './home_styled'

export default function home() {
  return (
    <>
     <Header />
     <main>
       <S.ContainerHome>
         <h1>Guilherme Rodrigues</h1>
         <h2>Desenvolvedor <span>Front-end</span></h2>

         <S.ContainerRedesSociais>
           <a href='#'>
            GitHub
            <AiFillGithub />
           </a>
           <a href='#'>
            Linkedin
            <FaLinkedin />
            </a>
         </S.ContainerRedesSociais>
       </S.ContainerHome>
     </main>
     <Footer />
    </>
  )
}

