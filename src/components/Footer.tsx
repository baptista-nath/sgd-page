import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 SGD Light. Todos os direitos reservados.</FooterText>
      <FooterLinks>
        <a href="https://facebook.com/sgdlight">Facebook</a>
        <a href="https://twitter.com/sgdlight">Twitter</a>
        <a href="mailto:contact@sgdlight.com">Email</a>
      </FooterLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 2rem;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLinks = styled.div`
  margin-top: 1rem;

  a {
    color: white;
    margin: 0 0.5rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
