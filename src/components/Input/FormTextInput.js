import styled from "styled-components";

const FormTextInput = (props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <InputWrapper>
        <Input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChangeHandler}
          value={props.value}
        ></Input>
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
  border-radius: 16x;
  margin-bottom: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
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

export default FormTextInput;
