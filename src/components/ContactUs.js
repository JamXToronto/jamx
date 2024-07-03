import { FaPhone, FaEnvelope } from "react-icons/fa6";
import styled from "styled-components";
import ContactForm from "./Input/ContactForm";
import ContactItem from "./UI/ContactItem";
import SocialMedia from "./SocialMedia";
import Icon from "./UI/Icon";

const ContactUs = () => {
  return (
    <ContactContainer>
      {/* <ContactInfo>
        <ContactHeader>Stay Connected</ContactHeader>
        <ContactDescription>
          Sign up for our emails to get the upcoming event information from
          JamX, early bird offerings, sponsor opportunities, and much more.
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
      </ContactInfo> */}
      <ContactForm></ContactForm>
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

const ContactHeader = styled.h1``;

const ContactDescription = styled.div`
  margin-bottom: 16px;
  color: grey;
`;

export default ContactUs;
