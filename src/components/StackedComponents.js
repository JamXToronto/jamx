import React from "react";
import styled from "styled-components";

const StackedComponents = (props) => {
  // Data for each stacked component
  const componentsData = props.data;

  return (
    <Container>
      {componentsData.map((data, index) => (
        <StackedComponent
          key={index}
          title={data.title}
          description={data.description}
          image={data.image}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  align-content: start;
  justify-items: start;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

`;

const StackedComponent = ({ title, description, image }) => {
  return (
    <ComponentContainer>
      <ImageWrapper>
        <Image src={image}></Image>
      </ImageWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  width: 100%;
  margin-right: 20px; /* Adjust spacing between components */
  padding: 3rem 3rem 0rem 3rem;
   
  text-align: center;
  align-self: start;
  height: 100%;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #888;
  overflow: auto;
  word-break: break-word;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 20rem;
  width: 100%;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 10%;
`;

export default StackedComponents;
