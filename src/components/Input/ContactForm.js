import styled from "styled-components";
import React, { useRef } from "react";
import { useState } from "react";
import FormTextInput from "./FormTextInput";
import FormRadioButton from "./FormRadioButton";
import FormTextArea from "./FormTextArea";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const radioOptions = ["Volunteer", "Mentor", "Speaker", "Sponsor", "Other"];
  const [submissionIsSuccessful, setSubmissionIsSuccessful] = useState(false);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedOption: "",
    message: "",
  });
  const recaptchaRef = useRef();

  const hasInputErrors = () => {
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const email = formData.email;

    setFirstNameError("");
    setEmailError("");
    setLastNameError("");

    if (firstName.trim() === "") {
      setFirstNameError("First name should not be empty.");
    }
    if (format.test(firstName)) {
      setFirstNameError(
        "First name should not not contain special characters."
      );
    }
    if (lastName.trim() === "") {
      setLastNameError("Last name should not be empty.");
    }
    if (format.test(lastName)) {
      setLastNameError("Last name should not not contain special characters.");
    }
    if (email.trim() === "") {
      setEmailError("Email should not be empty.");
    }

    if (!recaptchaRef.current.getValue()) {
      console.log("reCAPTCHA is not complete.");
    }

    return (
      firstName.trim() === "" ||
      format.test(firstName) ||
      lastName.trim() === "" ||
      format.test(lastName) ||
      email.trim() === "" ||
      !recaptchaRef.current.getValue()
    );
  };

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

    const recaptchaValue = recaptchaRef.current.getValue();

    if (hasInputErrors()) {
      return;
    }
    const reqData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      recaptcha: recaptchaValue,
    };

    const res = await fetch("/brevo/add-contact", {
      method: "POST",
      body: JSON.stringify(reqData),
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
              error={firstNameError}
            ></FormTextInput>
            <FormTextInput
              type="text"
              name="lastName"
              label="Last Name"
              placeholder=" Your Last Name"
              onChangeHandler={textChangeHandler}
              value={formData.lastName}
              error={lastNameError}
            ></FormTextInput>
          </FormNameInputContainer>
          <FormTextInput
            type="email"
            name="email"
            label="Email"
            placeholder="jane@example.com"
            onChangeHandler={textChangeHandler}
            value={formData.email}
            error={emailError}
          ></FormTextInput>
          <ReCAPTCHAWrapper>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Ld2L-4pAAAAANcvsuvaeH7pGCuwCT7ivbRxTVnH"
            ></ReCAPTCHA>
          </ReCAPTCHAWrapper>
          <FormConsentText>
            By submitting this form, you agree to receive email marketing
            messages from JamX at the submitted email address. You can withdraw
            your consent at any time by following the unsubscribe instructions
            in any email we send to you.
          </FormConsentText>
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

  .g-recaptcha {
    display: inline-block;
  }
`;

const FormConsentText = styled.div`
  font-style: italic;
  font-size: 14px;
  margin-bottom: 20px;
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

const ReCAPTCHAWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export default ContactForm;
