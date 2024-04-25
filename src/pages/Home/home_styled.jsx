import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70vh;
`;

export const ContainerHome = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 15px;
 padding: 1em 0;
 color: #ccc;
 background-color: #2C3333;

 h1 {
    font-size: 75px;
 }

 h2 {
    font-size: 35px;
 }

 span {
    color:#A34343;
 }
`;

export const ContainerRedesSociais = styled.div`
 display: flex;
 gap: 5px;

 a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #A34343; 
    border: 1px solid white;
    color: white;
    width: 9rem;
    padding: 1em;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 6px;
    position: relative;
 }

 a::after {
   content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 0;
    background-color: #c57373;
    transition: width .8s ease-in-out;
    opacity: 0;
    border-radius: 6px;
 }

 a:hover::after {
   width: 100%;
   opacity: .3;
 }

 svg {
   font-size: 30px;
   background-color: transparent;
 }
`;
