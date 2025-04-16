// src/modules/components/Sidebar/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';  // Importando o Link do React Router
import { SidebarContainer, MenuItem } from './styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItem as={Link} to="/">🏠 Início</MenuItem>
      <MenuItem as={Link} to="/cadastro">📚 Cadastro de Alunos</MenuItem>
      <MenuItem as={Link} to="/alunos">📋 Lista de Alunos</MenuItem> {/* Link para a lista de alunos */}
      <MenuItem as={Link} to="#">⚙️ Configurações</MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
