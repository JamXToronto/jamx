import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import JamX_logo from "../assets/svgs/JamX_logo.svg";
import logo from "../assets/jamxicon.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShowHeader(false);
    } else {
      // if scroll up show the navbar
      setShowHeader(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const menuClickHandler = () => {
    setShowHeader(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header $show={showHeader}>
      <Nav>
        <Logo to="/">{/* <LogoImage src={JamX_logo}></LogoImage> */}</Logo>
        <MenuIcon onClick={toggleMenu}>
          <div className={isOpen ? "open" : ""}></div>
          <div className={isOpen ? "open" : ""}></div>
          <div className={isOpen ? "open" : ""}></div>
        </MenuIcon>
        <Menu open={isOpen}>
          <MenuList>
            <ScrollLink
              to="upcoming-events"
              smooth={true}
              duration={1000}
              onClick={menuClickHandler}
            >
              <MenuItem>Upcoming Events</MenuItem>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={1000}
              onClick={menuClickHandler}
            >
              <MenuItem>About Us</MenuItem>
            </ScrollLink>
          </MenuList>
        </Menu>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  padding: 24px 40px;
  position: fixed;
  top: 0;
  z-index: 1;

  visibility: ${({ $show }) => ($show ? "" : "hidden")};
  opacity: ${({ $show }) => ($show ? "100%" : "0%")};
  transition: visibility 0.3s linear, opacity 0.3s linear;
`;

const Nav = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  position: relative;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Logo = styled.a`
  background-image: url(${logo});
  background-size: 220px auto; /* Adjust the width as needed, 'auto' will maintain aspect ratio */
  background-repeat: no-repeat;
  background-position: center; /* Center the background image */
  width: 25vw; /* Adjust width using vw units */
  max-width: 120px; /* Set max-width to maintain proportion */
  height: 40px; /* Allow height to adjust proportionally */
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  height: 40px;
  justify-content: center;

  div {
    width: 25px;
    height: 3px;
    background: black;
    margin: 3px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    border-radius: 8px;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    background: black;
    width: 100%;
    transition: all 0.3s ease;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    overflow: hidden;
  }
`;

const MenuItem = styled.div`
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px;
  margin-right: 8px;
  cursor: pointer; 
  &:hover {
    color: grey;
  }
    
  @media screen and (max-width: 768px) {
    color: white;
    padding: 20px 32px 20px 16px;
    margin-right: 0;
    &:hover {
      background: #555;
      color: white;
    }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  
  @media screen and (max-width: 768px) {
    padding: 10px;
    flex-direction: column;

    > hr{
      display: block;
    }
    }
  }
}
`;

const Seperator = styled.hr`
  width: 100%;
  padding: 0px;
  margin: 0px;
  display: none;
`;

export default NavBar;
