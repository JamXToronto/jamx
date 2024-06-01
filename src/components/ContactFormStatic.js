import React, { useState } from 'react';
import styled from 'styled-components';

const ContactFormStatic = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    selectedOption: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      selectedOption: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // console.log(formData);
    try {
      // Authenticate with Zoho to obtain access token
      const accessToken = await authenticateWithZoho(); // Implement your authentication function
    
      // Lead data to be sent
      const leadData = {
        data: [
          {
            Last_Name: formData.lastName,
            First_Name: formData.firstName,
            Email: formData.email
            // Add more lead fields as needed
          }
        ]
      };
      console.log(leadData, 'hello')
  
      // POST request to create lead
      const response = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
        method: "POST",
        headers: {
          "Authorization": `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(leadData)
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
  const clientCode = ""

  // Make a request to Zoho authentication endpoint
  const response = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      // Add any additional parameters as needed
    })
  });

  const data = await response.json();

  if (response.ok) {
    return data.access_token;
  } else {
    throw new Error(`Failed to authenticate with Zoho: ${data.error}`);
  }
};


  const radioOptions = ['Volunteer', 'Mentor', 'Speaker', 'Sponsor', 'Other'];

  return (
    <FormContainer className="FormContainer">
      <FormTitle>Contact Us</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name *"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name *"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail *"
          />
        </FormGroup>
        <Label>Interested in helping as:</Label>
        <RadioFormGroup>
          {radioOptions.map((option, index) => (
            <RadioInputContainer key={index}>
              <RadioInput
                type="radio"
                id={`option${index + 1}`}
                name="selectedOption"
                value={`option${index + 1}`}
                checked={formData.selectedOption === `option${index + 1}`}
                onChange={handleRadioChange}
              />
              <RadioLabel htmlFor={`option${index + 1}`}>{option}</RadioLabel>
            </RadioInputContainer>
          ))}
        </RadioFormGroup>
        <FormGroup>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about yourself"
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 800px;
  width: 90%;
  margin: auto;
  border-radius: 60px;
  max-height: 800px;
`;

const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #333;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
  border-radius: 60px;
  margin-bottom: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  resize: vertical;
  transition: border-color 0.3s ease-in-out;
  border-radius: 40px;
  min-height:200px;


  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const RadioFormGroup = styled.div`
 
  display: flex;
  width: 90%;
  margin: 1.5rem auto;
  justify-content: space-around;
`;

const RadioOptionsContainer = styled.div`
  display: flex;
  content: space-between;
`;

const RadioInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 0px;
  margin-right: 5px;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #007bff;
  }
`;

const RadioLabel = styled.label`
  color: #333;
  font-size: 14px;
`;

const SubmitButton = styled.button`
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

export default ContactFormStatic;

