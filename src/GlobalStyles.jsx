import styled, { createGlobalStyle } from "styled-components";

//This is the Global Style
const GlobalStyle = createGlobalStyle`

/* import fonts : Roboto*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

 *,*::after,*::before{
     padding:0;
     margin:0;
     box-sizing:border-box;
     font-family:'Roboto', sans-serif;
  }

`;

//Global Container Style
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px 0 30px;
  }
`;

//Button Styled
export const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  outline: 0;
  border: 0;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
