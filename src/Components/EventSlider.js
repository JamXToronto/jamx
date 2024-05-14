import styled from "styled-components";
import image from "../assets/brain.png";
import Button from "./Button";

const EventSlider = (props) => {
  const eventsData = props.eventsData;

  return (
    <EventSliderContainer>
      <h2>Upcoming Events</h2>
      {eventsData.map((data, index) => (
        <Event key={index}>
          <EventImageWrapper>
            <img src={data.image} alt="" />
          </EventImageWrapper>
          <EventInfoContainer>
            <div>{data.title}</div>
            <span>{data.date}</span>
            {data.date !== "TBD" ? (
            <Button>Get More Info</Button>
          ) : null}
          </EventInfoContainer>
        </Event>
      ))}
    </EventSliderContainer>
  );
};

const EventSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 40px;
`;

const Event = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
  max-width: 768px;
  align-items: center;
`;

const EventImageWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const EventInfoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 8px;

  div {
    font-weight: bold;
  }

  button {
    width: 100%;
    margin: 0;
    padding: 8px 8px;
  }
`;

export default EventSlider;
