import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Input/Button";
import { FiArrowRight } from "react-icons/fi";
import CompanyBanner from "./CompanyBanner";
import backgroundImage from "../assets/hero-background.png";

// Define the keyframes for the animation
const gradientAnimation = keyframes`
    0%, 100% {
        background-position: 0 0;
    }
    50% {
        background-position: 100% 0;
    }
`;

const particleAnimation = keyframes`
    from {
        transform: translateY(-10vh) rotateZ(0deg);
        opacity: 0;
    }
    to {
        transform: translateY(100vh) rotateZ(360deg);
        opacity: 1;
    }
`;

// Functional component
const HeroPanel = (props) => {
  return (
    <Container>
      <ContentContainer>
        <div></div>
        <h1>
          Service Design Jam. <br />
          Finding Solutions.
          <br />& Problems.
        </h1>
        <Button onClick={props.scrollHandler}>
          <CircleDiv>
            <FiArrowRight color="white" size={24} />
          </CircleDiv>
          <h3>Contact Us</h3>
        </Button>
        <p>Inspiring next generational talent to do better for the world.</p>
      </ContentContainer>
      <BannerWrapper>
        <StyledCompanyBanner />
      </BannerWrapper>
    </Container>
  );
};

// Define your styled component
const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  background-size: cover;
  color: white;
  text-align: center;
  min-height: 100vh;
  font-family: untitled-medium;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */

  }
`;

const ContentContainer = styled.div`
  font-family: untitled-medium;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  flex: 1;

  div {
    height: 48px;
  }

  h1 {
    font-size: min(90px, 8.8vw);
    letter-spacing: -0.02em;
    line-height: 0.85em;
    background: linear-gradient(
      to right,
      rgb(68, 32, 153),
      rgb(156, 69, 222),
      rgb(216, 110, 239)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${gradientAnimation} 18s infinite reverse;
    margin: 2.5% 0;
  }

  p {
    font-size: 1.25rem;
    background: linear-gradient(
      to right,
      rgb(68, 32, 153),
      rgb(156, 69, 222),
      rgb(216, 110, 239)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${Button} {
    background-color: #fff;
    border: none;
    color: black;
    border-radius: 85px;
    cursor: pointer;
    min-height: 50px;
    min-width: 250px;
    position: relative;

    h3 {
      text-align: left;
      font-family: untitled-medium;
      font-weight: 500;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const StyledCompanyBanner = styled(CompanyBanner)`
  width: 100%;
  margin-bottom: auto;
`;

const CircleDiv = styled.div`
  width: 50px;
  height: 50px;
  background-color: purple;
  border-radius: 50%;
  position: absolute;
  right: 35px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50%, -50%) scale(1);
  transition: transform 0.3s ease-in-out, background-color 0.3s; /* Transition for transform and background-color */
  cursor: pointer; /* Show pointer cursor on hover */

  ${Button}:hover & {
    transform: translate(50%, -50%) scale(1.1);
    background: linear-gradient(
      to right,
      rgb(68, 32, 153),
      rgb(156, 69, 222),
      rgb(216, 110, 239)
    ); /* Change background color on hover */
  }
`;

const BannerWrapper = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default HeroPanel;
