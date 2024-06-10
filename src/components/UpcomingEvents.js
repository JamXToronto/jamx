import styled from "styled-components";
import Slider from "./UI/Slider";

const UpcomingEvents = (props) => {
  const eventsData = props.eventsData;

  if (!eventsData) {
  }

  return (
    <UpcomingEventsContainer>
      <Heading>Upcoming Events</Heading>
      <Slider data={eventsData}></Slider>
    </UpcomingEventsContainer>
  );
};

const UpcomingEventsContainer = styled.div`
  justify-content: center;
  align-content: center;
  background-color: rgba(250,243,253,255);
  height: 100%;
  width: 100%;
  margin: 0;

  h2 {
    align-text: center;
    justify-content: center;
  }
`;

const Heading = styled.h2`
  text-align: center;
`;

export default UpcomingEvents;
