import React from "react";
import styled from "styled-components";

const BannerImage: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Transforme Seu Delivery com SGD Light</HeroTitle>
        <HeroSubtitle>
          O sistema de gestão que você precisa para otimizar seu negócio.
        </HeroSubtitle>
        <HeroButton href="#pricing">Saiba Mais</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  background-image: url("/assets/image/bannerapp.png"); /* Substitua pelo caminho da sua imagem */
  background-size: cover;
  background-position: center;

  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default BannerImage;
