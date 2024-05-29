import React from 'react';
import styled from 'styled-components';

// Styled component for the footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

// React component
const Footer = () => {
  return (
    <FooterContainer>
      © 2024 JamX. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
