import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 200px;
  height: 100vh;
  background-color: var(--LIGHT-GRAY);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.a`
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--Font-text);
  text-decoration: none;
  &:hover {
    color: var(--GREEN);
  }
`;
