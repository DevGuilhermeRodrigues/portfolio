import styled from "styled-components";

export const ContainerSection = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 50px;
 padding: 1em 0;
 color: #ccc;
  
 h1 {
    font-size: 35px;
    color: #A34343;
   }
  
   @media (max-width: 1080px) {
      flex-direction: column;
      gap: 20px;
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
 @media (max-width: 1080px){
   width: 100%;
   height: fit-content;
   margin: auto 0;
   flex-direction: column;
   justify-content: flex-start;
 }
`;

export const ContainerProjeto = styled.div`
 .containerLinks {
    display: flex;
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

 @media (max-width: 1080px) {
   display: flex;
   width: 350px;
   height: 150px;
   padding: 2em;
   margin: 2em 0 2em 1em;
   align-items: center;
   gap: 10px;
 }
`;