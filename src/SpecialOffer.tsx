// src/components/SpecialOffer.tsx
import React from "react";
import styled from "styled-components";

const SpecialOffer: React.FC = () => {
  return (
    <OfferContainer>
      <OfferContent>
        <OfferTitle>🎉 Oferta Imperdível!</OfferTitle>
        <OfferText>
          Aproveite <strong>3 meses gratuitos</strong> ao se inscrever agora!
          Comece a pagar apenas a partir do <strong>4º mês</strong>. Não perca
          essa oportunidade única de experimentar todas as funcionalidades do{" "}
          <em>SGD Light</em> sem compromisso!
        </OfferText>
        <OfferButton>Quero meus 3 meses grátis!</OfferButton>
      </OfferContent>
    </OfferContainer>
  );
};

const OfferContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  border-top: 5px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 5px solid ${({ theme }) => theme.colors.secondary};
`;

const OfferContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const OfferTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const OfferText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const OfferButton = styled.button`
  background-color: yallow;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

export default SpecialOffer;
