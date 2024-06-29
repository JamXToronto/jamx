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
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 600px;
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
  color: #888;
  overflow: auto;
  word-break: break-word;
`;

const ImageWrapper = styled.div`
  align-content: center;
  padding: 40px;
  max-width: 500px;
  max-height: 500px;
`;

const ImageLayer = styled.img`
  box-shadow: 32px 32px black;
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

export default ContentItem;
