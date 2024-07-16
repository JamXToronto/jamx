import styled from "styled-components";

const ContentItem = (props) => {
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
  width: 100%;
  justify-content: center;
  margin: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 5px;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.primaryGradient};

  font-family: untitled-medium;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #888;
  overflow: auto;
  word-break: break-word;

  font-weight: 200;
  color: white;

  
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  align-content: center;

  max-width: 560px;
  max-height: 560px;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 16px 16px 0px 16px;
    padding: 0px;
    max-width: 400px;
    max-height: 400px;
  }
`;

const ImageLayer = styled.img`
  box-shadow: 32px 32px ${(props) => props.theme.primaryGradient};
  border-radius: 40px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30% 10%;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }
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
// max-width: 100%;
// max-height: 100%;
// `;

export default ContentItem;
