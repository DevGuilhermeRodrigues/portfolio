import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaGitAlt, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import * as S from './sobre_styled'

export default function sobre() {
  return (
    <>
     <Header />
      <S.ContainerSection>
        <S.ContainerAboutMe>

          <S.ContainerDescriptionMe>
          <h1>Sobre mim</h1>

          <p>
            Olá! Sou Guilherme Rodrigues, um entusiasta do desenvolvimento front-end com uma paixão por criar experiências digitais que cativam e inspiram.
            Meu foco está em transformar conceitos criativos em interfaces elegantes e funcionais que elevam a experiência do usuário.
          </p>

          <p>
            Constantemente imerso no mundo da programação front-end, estou sempre explorando novas técnicas e tendências para aprimorar minhas habilidades.
            Com domínio em tecnologias como HTML, CSS e JavaScript e ReactJs, estou sempre pronto para enfrentar desafios e encontrar soluções inovadoras.
          </p>
          </S.ContainerDescriptionMe>

          <S.ContainerImg>
            <img src='https://cdn-icons-png.flaticon.com/512/2274/2274766.png' alt=''/>
          </S.ContainerImg>

        </S.ContainerAboutMe>

        <S.ContainerSkill>
          <h2>Tecnologias</h2>

          <div>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaGitAlt />
            <FaReact />
            <SiStyledcomponents />
          </div>
        </S.ContainerSkill>
      </S.ContainerSection>
     <Footer/>
    </>
  )
}
