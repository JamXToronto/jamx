import React from "react";
import styled from "styled-components";
import { SiTarget } from "react-icons/si";

// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
  background-color: ${(props) => props.theme.primary};
  background-size: cover;
`;

const WhiteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
  margin: 10% 0;
  background-color: #fff;
  background-size: cover;
  border-radius: 25px;
`;

// Styled component for the heading
const Heading = styled.h1`
  text-align: center;
  padding: 0;
  font-size: 1.75rem;
  margin: 0;
  font-size: min(90px, 8.8vw);
  letter-spacing: -.02em;
  line-height: .85em;
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  margin: 1% 11%;
  font-family: untitled-medium;
  font-weight: 500;

  span {
    background: ${(props) => props.theme.tertiaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: #888;
  text-align: center;
  padding: 0 20px;
  font-family: untitled-medium;
  font-weight: 700;
  color: rgb(68,32,153);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.5% 0 0 0%;
  h2 {
    padding: 0 5px;
    color: ${(props) => props.theme.primary};
  }
`;

const Text = styled.div`
  font-size: 1.35rem;
  color: black;
  text-align: center;
  padding: 0 20px;
  font-family: regular;
  color: rgb(156,69,222);
  margin: 3.5% 11%;

  h4 {
    color: black;
    text-align: center;
    margin: 3.5% 11%;
  }
`;

const PinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 80%;
  margin: auto;
  flex-direction: column;
  padding: 40px;
  background-color: pink;
  background-size: cover;
  border-radius: 25px;
`
// React component
const TextContainer = ({ text }) => {
  return (
    <Container>
      <WhiteContainer>
        <Title>
           <SiTarget color="black" size={24} padding="0 10px"/>
           <h2>Mission Statement</h2>
        </Title>
        <Heading>
          Create a <span>world</span> where everyone has the <span>chance</span> to drive <span>meaningful change</span>.
        </Heading>
        {/* <Text><h3>{text}</h3></Text> */}
        <Text><h4>Solve problems with the help of other participants, mentors, judges, and sponsors. Turn an idea into a prototype.</h4></Text>
        {/* <PinkContainer/> */}
      </WhiteContainer>
      
    </Container>
  );
};

export default TextContainer;
