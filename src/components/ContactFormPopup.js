import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ContactFormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const modalEl = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      const formContainer = document.querySelector('.FormContainer');
      if (formContainer && !formContainer.contains(e.target) && e.target.tagName !== 'BUTTON') {
        onClose(); // Close modal if clicked outside of FormContainer and not on a button
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Overlay>
      <FormContainer className="FormContainer">
        <CloseButton onClick={onClose}>Close</CloseButton>
        <FormTitle>Contact Us</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 400px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  right: 10px; /* Adjust the right position as needed */
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
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #333;
  display: block;
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

  &:focus {
    border-color: #007bff;
    outline: none;
  }
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

  &:hover {
    background-color: #0056b3;
  }
`;


export default ContactFormPopup;
