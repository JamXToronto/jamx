import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Input/Button";
import { FiArrowRight } from "react-icons/fi";
import CompanyBanner from "./CompanyBanner";
import backgroundImage from "../assets/hero-background.png";
import ContentItem from "./UI/ContentItem";
import makeStuffThatMattersImage from "../assets/make-stuff-that-matters.png";
import yourNewCrewAwaitsImage from "../assets/your-new-crew-awaits.png";

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

const componentsData = {
  title: "Make Stuff That Matters",
  description:
    "Ever wanted to change the world with your ideas? This is your playground. Meet cool folks from all corners of Toronto and create solutions that’ll make a difference. It’s teamwork with a side of fun and a splash of revolution.",
  image: yourNewCrewAwaitsImage,
};
// Add more data objects for additional components
// Functional component
const HeroPanel = (props) => {
  return (
    <>
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
          {/* <p>Inspiring next generational talent to do better for the world.</p> */}
        </ContentContainer>
        <HeroContentImage>
          <ImageWrapper>
            <ImageLayer src={componentsData.image}></ImageLayer>
            
          </ImageWrapper>
        </HeroContentImage>
      </Container>
      <BannerWrapper>
        <StyledCompanyBanner />
      </BannerWrapper>
    </>
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
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ContentContainer = styled.div`
  font-family: untitled-medium;
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: flex-start; /* Align to the start horizontally */
  padding: 20px;

  @media screen and (max-width: 768px) {
    position: relative;
  }

  div {
    height: 48px;
  }

  h1 {
    font-size: min(90px, 8.8vw);
    letter-spacing: -0.02em;
    line-height: 1em;
    background: ${(props) => props.theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${gradientAnimation} 18s infinite reverse;
    margin: 2.5% 0;
    padding: 20px;
    text-align: left;
    z-index: 100;
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
    // margin: auto;
    position: relative;
    z-index: 3;

    h3 {
      text-align: left;
      font-family: untitled-medium;
      font-weight: 500;
    }

    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
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
  background-color: ${(props) => props.theme.primaryGradient};
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
    background: ${(props) => props.theme.gradient}; /* Change background color on hover */
  }
`;

const BannerWrapper = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
`;

const HeroContentImage = styled.div`
  position: absolute;
  top: 10rem;
  right: 10rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;

const ImageWrapper = styled.div`
  padding: 40px;
  height: 100%;
`;

const ImageLayer = styled.img`
  box-shadow: 32px 32px ${(props) => props.theme.primaryGradient};
  border-radius: 40px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30% 10%;
  filter: brightness(50%);
`;

export default HeroPanel;
