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

 .logo-name {
   font-size: 18px;
   font-weight: 300;
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
    position: relative;
    padding-bottom: 5px;
    font-size: 17px;
    letter-spacing: 1px;
 }

 a::after {
    content: " ";
    width: 0;
    height: 3px;
    position: absolute;
    background-color: #A34343;
    bottom: 0;
    left: 0;
    transition: .5s ease-in-out;
}

 a:hover::after {
    width: 100%;
}
`;

