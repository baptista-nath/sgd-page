import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp: React.FC = () => {
  return (
    <WhatsAppContainer
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </WhatsAppContainer>
  );
};

const WhatsAppContainer = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    background-color: #128c7e;
  }
`;

export default FloatingWhatsApp;
