import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const BenefitsSection: React.FC = () => {
  return (
    <SectionContainer id="benefits">
      <SectionTitle>Por que Escolher SGD Light?</SectionTitle>
      <BenefitsGrid>
        <BenefitItem>
          <FaCheckCircle />
          <BenefitTitle>Gestão Simplificada</BenefitTitle>
          <BenefitDescription>
            Ferramentas intuitivas que facilitam a administração do seu
            delivery.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <FaCheckCircle />
          <BenefitTitle>App Personalizado</BenefitTitle>
          <BenefitDescription>
            Ofereça um aplicativo exclusivo para os seus clientes.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <FaCheckCircle />
          <BenefitTitle>Planos Flexíveis</BenefitTitle>
          <BenefitDescription>
            Escolha o plano que melhor se adapta às suas necessidades.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <FaCheckCircle />
          <BenefitTitle>Suporte 24/7</BenefitTitle>
          <BenefitDescription>
            Conte com nossa equipe a qualquer hora do dia.
          </BenefitDescription>
        </BenefitItem>
      </BenefitsGrid>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const BenefitItem = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const BenefitTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const BenefitDescription = styled.p`
  color: #666;
`;

export default BenefitsSection;
