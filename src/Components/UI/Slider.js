import { useState } from "react";
import styled from "styled-components";
import Button from "../Input/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Slider = (props) => {
  const data = props.data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  if (!data) {
    return;
  }

  return (
    <Wrapper>
      <SliderButton onClick={prevSlide}>
        <FaAngleLeft size={24} />
      </SliderButton>
      <SliderContainer>
        {data.map((data, index) => (
          <SliderItem key={index} $index={index} $currentIndex={currentIndex}>
            <ItemImageWrapper>
              <Image src={data.image} alt="" />
            </ItemImageWrapper>
            <ItemInfo>
              <h3>{data.title}</h3>
              <span>{data.date}</span>
              {data.date !== "TBD" ? <Button>Get More Info</Button> : null}
            </ItemInfo>
          </SliderItem>
        ))}
      </SliderContainer>
      <SliderButton onClick={nextSlide}>
        <FaAngleRight size={24} />
      </SliderButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderButton = styled.button`
  display: flex;
  border: none;
  border-radius: 8px;

  min-width: 24px;
  cursor: pointer;
  background-color: white;
  margin-left: 16px;
  margin-right: 16px;
  padding: 8px;
`;

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 768px;
  height: 100%;
  margin-top: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SliderItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;

  translate: ${({ $index, $currentIndex }) => `${-100 * $currentIndex}%`};

  transition: translate 300ms ease-in-out;
  // display: ${({ $index, $currentIndex }) =>
    $index === $currentIndex ? "" : "none"};
`;

const ItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;


  overflow: hidden;
  width: 100%;


  @media screen and (max-width: 320px) {
    display: none;
    padding: none;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-position: 50% 50%;
  aspect-ratio: 4/3;
`;

const ItemInfo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
`;

export default Slider;
