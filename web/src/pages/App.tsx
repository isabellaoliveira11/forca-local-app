import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando o Router
import FormAluno from '../modules/components/FormAluno';
import ListaAlunos from '../modules/components/ListaAlunos';
import { Aluno } from '../modules/components/FormAluno/interface';
import { buscarAlunos } from '../services/alunoService';
import styled from 'styled-components';
import Sidebar from '../modules/components/SideBar/index';  // Importando a Sidebar
import Home from './Home'; // Importando o componente de Home

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

function App() {
  const [, setAlunos] = useState<Aluno[]>([]);
  const [alunoEdicao, setAlunoEdicao] = useState<Aluno | null>(null);

  const fetchAlunos = async () => {
    try {
      const alunos = await buscarAlunos();
      setAlunos(alunos);
    } catch (error) {
      console.error("Erro ao buscar alunos", error);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  return (
    <Router>
      <AppContainer>
        <Sidebar /> {/* Sidebar aqui */}
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Rota da Home */}
            <Route path="/cadastro" element={
              <>
                <Title>{alunoEdicao ? 'Editar Aluno' : 'Cadastrar Aluno'}</Title>
                <FormAluno alunoEdicao={alunoEdicao} fetchAlunos={fetchAlunos} setAlunoEdicao={setAlunoEdicao} />
              </>
            } />
            <Route path="/alunos" element={
              <>
                <SubTitle>Lista de Alunos</SubTitle>
                <ListaAlunos setAlunoEdicao={setAlunoEdicao} fetchAlunos={fetchAlunos} />
              </>
            } />
            {/* Adicione outras rotas como a de configurações */}
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
