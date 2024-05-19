import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/jamxicon.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/"></Logo>
      <MenuIcon onClick={toggleMenu}>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </MenuIcon>
      <Menu open={isOpen}>
        <MenuList>
          <ScrollLink to="upcoming-events" smooth={true} duration={1000}>
            <MenuItem>Upcoming Event</MenuItem>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={1000}>
            <MenuItem>About Us</MenuItem>
          </ScrollLink>
        </MenuList>
      </Menu>
    </Nav>
  );
};
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 40px;
  position: relative;
  z-index: 2;
`;

const Logo = styled.a`
  background-image: url(${logo});
  background-size: 220px auto; /* Adjust the width as needed, 'auto' will maintain aspect ratio */
  background-repeat: no-repeat;
  background-position: center; /* Center the background image */
  width: 25vw; /* Adjust width using vw units */
  max-width: 250px; /* Set max-width to maintain proportion */
  height: 50px; /* Allow height to adjust proportionally */
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background: black;
    margin: 3px;
    transition: all 0.3s ease;
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
    flex-direction: column;
    position: absolute;
    top: 82px;
    left: 0;
    background: black;
    width: 100%;
    transition: all 0.3s ease;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    overflow: hidden;
  }
`;

const MenuItem = styled.div`
color: black;
text-decoration: none;
font-size: 1rem;
padding: 10px 15px;
transition: all 0.3s ease;
margin-right: 8px;
cursor: pointer; 
&:hover {
  color: grey;
}

@media screen and (max-width: 768px) {
  color: white;
  padding: 10px 0;
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

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  /* Set cursor to pointer on hover */
  &:hover {
    cursor: pointer;
  }
`;

const Seperator = styled.hr`
  width: 100%;
  padding: 0px;
  margin: 0px;
  display: none;
`;

export default NavBar;
