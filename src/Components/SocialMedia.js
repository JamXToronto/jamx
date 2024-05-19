import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Icon from "./UI/Icon";

const SocialMedia = () => {
  return (
    <Container>
      <Icon link="https://x.com">
        <FaFacebookF size={24}></FaFacebookF>
      </Icon>
      <Icon link="https://x.com">
        <FaInstagram size={24}></FaInstagram>
      </Icon>
      <Icon link="https://x.com">
        <FaXTwitter size={24}></FaXTwitter>
      </Icon>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;



export default SocialMedia;
