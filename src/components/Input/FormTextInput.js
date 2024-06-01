import styled from "styled-components";

const FormTextInput = (props) => {
  return (
    <Container>
      <Label $error={props.error}>{props.label}</Label>
      <InputWrapper>
        <Input
          $error={props.error}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChangeHandler}
          value={props.value}
        ></Input>
      </InputWrapper>
      {props.error && <ErrorText>{props.error}</ErrorText>}
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

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  border-color: ${({ $error }) => ($error ? "red" : "")};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${({ $error }) => ($error ? "red" : "")};
`;

const ErrorText = styled.div`
  color: red;
`;

export default FormTextInput;
