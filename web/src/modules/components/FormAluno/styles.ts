// styles.ts
import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  width: 100%;
  padding: 8px 12px;
  color: #4b5563;
  font-size: 14px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

export const Select = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  width: 100%;
  padding: 8px 12px;
  color: #4b5563;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #4b5563;
  margin-bottom: 8px;
  display: block;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? '#3b82f6' : '#d1d5db')};
  color: ${(props) => (props.primary ? '#000' : '#4b5563')};
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? '#2563eb' : '#e5e7eb')};
  }
`;

export const ErrorMessage = styled.div`
  color: #f87171;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 16px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
