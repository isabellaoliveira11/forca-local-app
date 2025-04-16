import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
  margin-top: 16px;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 16px;
`;

export const NoAlunosMessage = styled.p`
  color: #a0aec0;
`;

export const AlunoCard = styled.div`
  background-color: #f7fafc;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const AlunoInfo = styled.div`
  p {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #4a5568;

    strong {
      color: #2d3748;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  background-color: #4299e1;
  &:hover {
    background-color: #3182ce;
  }
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #f56565;
  &:hover {
    background-color: #e53e3e;
  }
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
`;
