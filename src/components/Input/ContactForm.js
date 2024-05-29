import styled from "styled-components";
import React from "react";
import { useState } from "react";
import FormTextInput from "./FormTextInput";
import FormRadioButton from "./FormRadioButton";
import FormTextArea from "./FormTextArea";

const ContactForm = () => {
  const radioOptions = ["Volunteer", "Mentor", "Speaker", "Sponsor", "Other"];
  const [submissionIsSuccessful, setSubmissionIsSuccessful] = useState(false);

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

    const res = await fetch("/brevo/add-contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
    if (!data.error) {
      setSubmissionIsSuccessful(true);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      {!submissionIsSuccessful && (
        <React.Fragment>
          <h3>Subscribe to stay updated!</h3>
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
          <FormButton type="submit">Subscribe</FormButton>
        </React.Fragment>
      )}
      {submissionIsSuccessful && (
        <SuccessMessage>Thank you for subscribing!</SuccessMessage>
      )}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 24px;
  width: 100%;
  margin: auto;
  border-radius: 16px;
  max-width: 800px;
`;

const FormNameInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const FormButton = styled.button`
  display: flex;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;
  margin: auto;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  color: green;
  justify-content: center;
`;

export default ContactForm;
