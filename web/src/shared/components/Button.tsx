// src/shared/components/Button.tsx
import React from 'react';
import styled from 'styled-components';

// Definindo tipos para as propriedades do componente Button
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';  // Tipos possíveis para o "type"
  children: React.ReactNode;  // O "children" pode ser qualquer conteúdo JSX
}

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

function Button({ type = 'button', children }: ButtonProps) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

export default Button;
