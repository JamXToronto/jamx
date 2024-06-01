import React from "react";
import styled from "styled-components";

// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
`;

// Styled component for the heading
const Heading = styled.h2`
  text-align: center;
  padding: 0;
  font-size: 1.75rem;
  margin: 0;
`;

const Text = styled.div`
  font-size: 1.25rem;
  color: #888;
  text-align: center;
  padding: 0 20px;
`;

// React component
const TextContainer = ({ text }) => {
  return (
    <Container>
      <Heading>Our Mission</Heading>
      <Text>{text}</Text>
    </Container>
  );
};

export default TextContainer;
