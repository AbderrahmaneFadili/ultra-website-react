import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../GlobalStyles";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  ToggleMenu,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLink,
  NavLinkBtn,
} from "./Navbar.elements";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [button, setButton] = useState(true);

  //handle show & hide menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //handle hide menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  //show button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon /> ULTRA
            </NavLogo>

            <ToggleMenu onClick={toggleMenu}>
              {!showMenu ? <FaBars /> : <FaTimes />}
            </ToggleMenu>

            <NavMenu click={showMenu}>
              <NavItem onClick={closeMenu}>
                <NavLink to="/">Home</NavLink>
              </NavItem>

              <NavItem onClick={closeMenu}>
                <NavLink to="/products">Products</NavLink>
              </NavItem>

              <NavItem onClick={closeMenu}>
                <NavLink to="/services">Services</NavLink>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavLinkBtn to="/signup">
                    <Button primary>SIGN UP</Button>
                  </NavLinkBtn>
                ) : (
                  <NavLinkBtn to="/signup" onClick={closeMenu}>
                    <Button primary fontBig>
                      SIGN UP
                    </Button>
                  </NavLinkBtn>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
