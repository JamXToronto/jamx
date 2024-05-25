import styled from "styled-components";
import { useState } from "react";
import FormTextInput from "./FormTextInput";
import FormRadioButton from "./FormRadioButton";
import FormTextArea from "./FormTextArea";

const ContactForm = () => {
  const radioOptions = ["Volunteer", "Mentor", "Speaker", "Sponsor", "Other"];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedOption: "",
    message: "",
  });

  // NOTE: Currently entire form rerenders on each input.
  const textChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const radioChangeHandler = (e) => {
    setFormData({
      ...formData,
      selectedOption: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);

    const data = { email: formData.email };

    // POST request to create lead
    const res = await fetch("localhost:3001/");
    // const res = await fetch("https://localhost:3001/brevo/add-contact", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-Type": "application/json" },
    // });
  };

  return (
    <Form onSubmit={submitHandler}>
      <h3>Interested in helping?</h3>
      <FormNameInputContainer>
        <FormTextInput
          type="text"
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="Your First Name"
          onChangeHandler={textChangeHandler}
          value={formData.firstName}
        ></FormTextInput>
        <FormTextInput
          type="text"
          name="lastName"
          label="Last Name"
          placeholder=" Your Last Name"
          onChangeHandler={textChangeHandler}
          value={formData.lastName}
        ></FormTextInput>
      </FormNameInputContainer>
      <FormTextInput
        type="email"
        name="email"
        label="Email"
        placeholder="jane@example.com"
        onChangeHandler={textChangeHandler}
        value={formData.email}
      ></FormTextInput>
      <FormRadioButton
        label="Interested in helping as"
        options={radioOptions}
        onChangeHandler={radioChangeHandler}
        value={formData.selectedOption}
        selectedOption={formData.selectedOption}
      ></FormRadioButton>
      <FormTextArea
        value={formData.message}
        label="Your message"
        placeholder="Tell us about yourself"
        onChangeHandler={textChangeHandler}
        id="message"
        name="message"
      ></FormTextArea>
      <FormButton type="submit">Submit</FormButton>
    </Form>
  );
};

const FormNameInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  border-radius: 16px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;
  margin: auto;
  width: 80px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ContactForm;
