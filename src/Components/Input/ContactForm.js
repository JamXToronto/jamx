import styled from "styled-components";
import { useState } from "react";
import FormTextInput from "./FormTextInput";
import FormRadioButton from "./FormRadioButton";
import FormTextArea from "./FormTextArea";
import ContactItem from "../UI/ContactItem";
import SocialMedia from "../SocialMedia";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import Icon from "../UI/Icon";

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
    try {
      // Authenticate with Zoho to obtain access token
      const accessToken = await authenticateWithZoho(); // Implement your authentication function

      // Lead data to be sent
      const leadData = {
        data: [
          {
            Last_Name: formData.lastName,
            First_Name: formData.firstName,
            Email: formData.email,
            // Add more lead fields as needed
          },
        ],
      };
      console.log(leadData, "hello");

      // POST request to create lead
      const response = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        console.log("Lead created successfully");
      } else {
        console.error("Failed to create lead:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating lead:", error);
    }
  };

  // Example function for mocking authentication with Zoho
  const authenticateWithZoho = async () => {
    // Mock client ID and client secret
    const clientId = "";
    const clientSecret = "";
    const clientCode = "";

    // Make a request to Zoho authentication endpoint
    const response = await fetch("https://accounts.zoho.com/oauth/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
        // Add any additional parameters as needed
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.access_token;
    } else {
      throw new Error(`Failed to authenticate with Zoho: ${data.error}`);
    }
  };

  return (
    <ContactContainer>
      <ContactInfo>
        <ContactHeader>Contact Us</ContactHeader>
        <ContactDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ContactDescription>
        <ContactItem text="111-111-111">
          <Icon>
            <FaPhone size={24}></FaPhone>
          </Icon>
        </ContactItem>
        <ContactItem text="test@example.com">
          <Icon>
            <FaEnvelope size={24}></FaEnvelope>
          </Icon>
        </ContactItem>
        <SocialMedia></SocialMedia>
      </ContactInfo>

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
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-color: white;
  display: flex;
  padding: 40px;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;

  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 100%;
  }
`;

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

const ContactHeader = styled.h1``;

const ContactDescription = styled.div`
  margin-bottom: 16px;
  color: grey;
`;

export default ContactForm;
