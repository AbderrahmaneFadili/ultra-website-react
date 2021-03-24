import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyles";

//Nav
export const Nav = styled.nav`
  background-color: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

//Navbar Container
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

//Nav Logo
export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

//Nav Icon
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

//Toggle Menu
export const ToggleMenu = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

//Nav Menu
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  background: #101522;
  height: 90vh;
  width: 100%;
  position: fixed;
  top: 80px;
  left: ${({ click }) => (click ? 0 : "-100%")};
  transition: all 0.5s ease;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    align-items: center;
    position: initial;
    top: initial;
    left: initial;
    height: initial;
    width: initial;
    background: initial;
  }
`;

//Nav Item
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 4px solid transparent;
  width: 100%;
  align-self: center;

  &:hover {
    border-bottom-color: #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    border: none;
  }
`;

//Nav Item Button
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 86%;
    height: 120px;
    margin: 0 auto;
  }
`;

//Nav Link
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    transition: all 0.3s ease;

    &:hover {
      color: #4b59f7;
    }
  }
`;

//Nav Link Btn
export const NavLinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 0;
  outline: 0;
  width: 100%;
  height: 100%;
`;
