import styled from "styled-components";

const FormRadioButton = (props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <RadioButtonContainer>
        {props.options?.map((option, index) => {
          return (
            <RadioButtonWrapper key={index}>
              <RadioButton
                type="radio"
                name="selectedOption"
                id={option}
                value={option}
                checked={props.selectedOption === option}
                onChange={props.onChangeHandler}
              ></RadioButton>
              <label>{option}</label>
            </RadioButtonWrapper>
          );
        })}
      </RadioButtonContainer>
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

const RadioButtonWrapper = styled.div`
  padding: 10px 10px 10px 0;
  display: flex;
  align-items: center;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const RadioButton = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
  outline: none;
  cursor: pointer;
  

  &:checked {
    background-color: #007bff;
  }
`;

export default FormRadioButton;
