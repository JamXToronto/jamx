import styled from "styled-components";

const FormTextArea = (props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <TextAreaWrapper>
        <TextArea
          id={props.id}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChangeHandler}
        ></TextArea>
      </TextAreaWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

const TextAreaWrapper = styled.div`
  padding: 10px 10px 10px 0;
`;

const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 20px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
  border-radius: 40px;
  min-height: 200px;
  resize: none;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
export default FormTextArea;
