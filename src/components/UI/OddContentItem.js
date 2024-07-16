import styled from "styled-components";

const OddContentItem = (props) => {
  return (
    <ContentContainer>
      <ImageWrapper>
        <ImageLayer src={props.image}></ImageLayer>
      </ImageWrapper>
      <InfoContainer>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </InfoContainer>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 80px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 40px;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 600px;
  max-height: 300px;
  bottom: 0;
  right: 4rem;
  background-color: white;
  box-shadow: 32px 32px ${(props) => props.theme.primaryGradient};
  border-radius: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    position: static;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 5px;
  padding: 0;
  margin: 0;

  font-family: untitled-medium;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: black;
  overflow: auto;
  word-break: break-word;
`;

const ImageWrapper = styled.div`
  align-content: center;
  padding: 40px 180px 40px 40px;
  // max-width: 500px;
  max-height: 600px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImageLayer = styled.img`
  border-radius: 40px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30% 10%;
`;

// const ImageWrapper = styled.div`
//   align-content: center;
//   padding: 40px;
//   max-height: 480px;
//   height: 480px;
// `;

// const ImageLayer = styled.img`
//   box-shadow: 32px 32px green;
//   border-radius: 40px;
//   max-width: 100%;
//   max-height: 100%;
// `;

export default OddContentItem;
