import { BiBorderAll, BiColor } from "react-icons/bi";
import styled from "styled-components";

export const ContainerSection = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;
 height: 75vh;
 background-color: #2C3333;
 color: #ccc;
`;

export const ContainerAboutMe = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 gap: 15px;
`;

export const ContainerDescriptionMe = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
 width: 50rem;

 h1 {
    font-size: 35px;
    color: #A34343;
 }

 p {
    font-size: 18px;
 }
`;

export const ContainerImg = styled.div`
 img {
    width: 22rem;
    height: 22rem;
    border-radius: 50%;
 }
`;

export const ContainerSkill = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 15px;
 width: 40rem;

 h2 {
    font-size: 35px;
    color: #A34343
 }

 div {
    width: 80%;
    display: flex;
    justify-content: space-between;
 }

 svg {
    font-size: 35px;
 }
`;