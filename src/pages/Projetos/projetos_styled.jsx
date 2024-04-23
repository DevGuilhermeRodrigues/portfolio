import styled from "styled-components";

export const ContainerSection = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 50px;
 height: 75vh;
 color: #ccc;
 background-color: #2C3333;

 h1 {
    font-size: 35px;
    color: #A34343;
 }
`;

export const ContainerListProjetos = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 10px;

 img {
    width: 350px;
 }

 h2 {
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 300;
 }
`;

export const ContainerProjeto = styled.div`
 div {
    display: flex;
    /* flex-direction: column; */
    gap: 10px;
    margin-top: 10px;
 }

 a {
    color: white;
    background-color: #A34343;
    width: 7rem;
    padding: .6em 1em;
    border-radius: 6px;
    text-align: center;
 }
`;