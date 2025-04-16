import React from 'react';
import { SidebarContainer, MenuItem } from './styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItem href="#">🏠 Início</MenuItem>
      <MenuItem href="#">📚 Alunos</MenuItem>
      <MenuItem href="#">⚙️ Configurações</MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
