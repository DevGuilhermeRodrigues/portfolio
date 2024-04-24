import styled from "styled-components";

export const ContainerHome = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 15px;
 padding: 1em 0;
 border-top: 1px solid white;
 height: 75vh;
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
    color: white;
    width: 9rem;
    padding: 1em;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 6px;
 }

 svg {
   font-size: 30px;
   background-color: transparent;
 }
`;
