import styled from "styled-components";

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Button;
