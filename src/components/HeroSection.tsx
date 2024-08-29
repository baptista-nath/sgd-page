import React from "react";
import styled from "styled-components";

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Transforme Seu Delivery com SGD Light</h1>
        <p>
          O sistema de gestão que vai elevar o seu negócio ao próximo nível!
        </p>
        <HeroImageContainer></HeroImageContainer>
        <CallToAction href="#contact">Experimente Agora</CallToAction>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background-image: radial-gradient(
    circle at 90.56% -7.92%,
    #ffa500 0,
    #ffa500 16.67%,
    #ff4500 33.33%,
    #ff7f50 50%,
    #ff6347 66.67%,
    #ff4500 83.33%,
    #ff8c00 100%
  );
  color: white;
  text-align: center;
  padding: 4rem 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroImageContainer = styled.div`
  margin: 2rem 0;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CallToAction = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default HeroSection;
