import styled from "styled-components";

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-around;
 padding: 1em 0;
 color: white;
 background-color: #2C3333;
 border-bottom: 1px solid #ccc;
`;

export const ContainerLogo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 
 img {
    width: 60px;
    height: 60px;
 }
`;

export const Menu = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1em 0;
 width: 20rem; 

 a {
    color: white;
 }

 .linkProjetos {
    padding: .6em;
    border-radius: 10px;
 }
`;

