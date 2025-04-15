// src/shared/components/Input.tsx
import React from 'react';
import styled from 'styled-components';

// Definindo tipos para as propriedades do componente Input
interface InputProps {
  type: 'text' | 'password' | 'email' | 'select'; // Tipos possíveis para o "type"
  name: string;
  placeholder?: string; // O "placeholder" é opcional
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[]; // Somente necessário quando o tipo é 'select'
}

const StyledInput = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange, options }) => {
  if (type === 'select') {
    return (
      <StyledInput as="select" name={name} value={value} onChange={onChange}>
        <option value="" disabled>{placeholder}</option> {/* Emula o placeholder */}
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledInput>
    );
  }

  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
