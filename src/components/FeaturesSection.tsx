import React from "react";
import styled from "styled-components";

const FeaturesSection: React.FC = () => {
  return (
    <SectionContainer id="features">
      <SectionTitle>Funcionalidades do SGD Light</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Gestão de Pedidos</FeatureTitle>
          <FeatureDescription>
            Administre seus pedidos de forma eficiente e prática.
          </FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Relatórios Detalhados</FeatureTitle>
          <FeatureDescription>
            Obtenha insights detalhados sobre o desempenho do seu negócio.
          </FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>App Personalizado</FeatureTitle>
          <FeatureDescription>
            Ofereça aos seus clientes um aplicativo com a cara do seu negócio.
          </FeatureDescription>
        </FeatureItem>
      </FeaturesGrid>
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureItem = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FeatureDescription = styled.p`
  color: #666;
`;

export default FeaturesSection;
