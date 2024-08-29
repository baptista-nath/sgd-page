// src/components/Card.tsx
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: 1rem;
  margin: 1rem;
  border: 1px solid orange;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Card;
