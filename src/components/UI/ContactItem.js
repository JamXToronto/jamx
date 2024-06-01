import styled from "styled-components";

const ContactItem = (props) => {
  return (
    <Container>
      {props.children}
      <Text>{props.text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-style: solid;
  background-color: #d3d3d3;
  border-width: thin;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  align-items: center;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-color: grey;
`;

const Text = styled.div`
  padding-left: 16px;
  overflow: hidden;
`;

export default ContactItem;
