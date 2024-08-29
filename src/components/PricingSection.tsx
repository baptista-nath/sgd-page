// src/components/PricingSection.tsx
import React from "react";
import styled from "styled-components";
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingSection: React.FC = () => {
  return (
    <SectionContainer id="pricing">
      <SectionTitle>Planos e Preços</SectionTitle>
      <PricingGrid>
        <PricingItem>
          <PlanTitle>Básico</PlanTitle>
          <PlanPrice>R$ 99/mês</PlanPrice>
          <PlanFeatures>
            <FeatureItem available={true}>
              <FaCheck /> Gestão de Pedidos
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> Relatórios Básicos
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> Suporte via Email
            </FeatureItem>
            <FeatureItem available={false}>
              <FaTimes /> Relatórios Detalhados
            </FeatureItem>
            <FeatureItem available={false}>
              <FaTimes /> Suporte 24/7
            </FeatureItem>
            <FeatureItem available={false}>
              <FaTimes /> App Personalizado
            </FeatureItem>
          </PlanFeatures>
          <Button>Escolher Básico</Button>
        </PricingItem>
        <PricingItem>
          <PlanTitle>Intermediário</PlanTitle>
          <PlanPrice>R$ 199/mês</PlanPrice>
          <PlanFeatures>
            <FeatureItem available={true}>
              <FaCheck /> Gestão de Pedidos
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> Relatórios Detalhados
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> Suporte 24/7
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> App Personalizado
            </FeatureItem>
          </PlanFeatures>
          <Button>Escolher Intermediário</Button>
        </PricingItem>
        <PricingItem>
          <PlanTitle>Avançado</PlanTitle>
          <PlanPrice>R$ 299/mês</PlanPrice>
          <PlanFeatures>
            <FeatureItem available={true}>
              <FaCheck /> Gestão Completa
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> Relatórios Avançados
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> Suporte 24/7 com Consultoria
            </FeatureItem>
            <FeatureItem available={true}>
              <FaCheck /> App Personalizado Premium
            </FeatureItem>
          </PlanFeatures>
          <Button>Escolher Avançado</Button>
        </PricingItem>
      </PricingGrid>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const PricingItem = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PlanTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const PlanPrice = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const FeatureItem = styled.li<{ available: boolean }>`
  margin-bottom: 0.5rem;
  color: ${({ available }) => (available ? "#333" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
    color: ${({ available }) => (available ? "green" : "red")};
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default PricingSection;
