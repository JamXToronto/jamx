import backgroundImage from "../assets/hero-background.png";
import styled from "styled-components";
import Button from "./Input/Button";

const HeroPanel = (props) => {
  return (
    <Container>
      <h1>Let's Jam, Toronto!</h1>
      <p>Inspiring next generational talent to do better for the world.</p>
      <Button onClick={props.scrollHandler}>Contact Us</Button>
    </Container>
  );
};

const Container = styled.div`
  // background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)),
    url(${backgroundImage});
  background-size: cover;
  color: white;
  padding: 80px 20px;
  text-align: center;
  min-height: 60vh;
  font-family: regular;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  p {
    font-size: 1.5rem;
  }

  ${Button} {
    margin: auto auto 0 auto;
    background-color: #0aaef5;
    border: none;
    color: black;
    border-radius: 0;
    cursor: pointer;
    border-radius: 16px;
  }
`;

export default HeroPanel;
