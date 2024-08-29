// src/components/Header.tsx
import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="SGD Light Logo" />
      <nav>{/* Aqui você pode adicionar os links de navegação */}</nav>
    </HeaderContainer>
  );
};

export default Header;
