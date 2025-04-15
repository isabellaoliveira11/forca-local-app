// src/App.jsx

import { useState, useEffect } from 'react';
import FormAluno from './modules/components/FormAluno';
import ListaAlunos from './modules/components/ListaAlunos';
import axios from 'axios';
import { Aluno } from './modules/components/FormAluno/interface';

function App() {
  
  const [, setAlunos] = useState([]);
  const [alunoEdicao, setAlunoEdicao] = useState<Aluno | null>(null);

  const fetchAlunos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/alunos');
      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos", error);
    }
  };

  useEffect(() => {
    fetchAlunos(); 
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>{alunoEdicao ? 'Editar Aluno' : 'Cadastrar Aluno'}</h1>
      <FormAluno alunoEdicao={alunoEdicao} fetchAlunos={fetchAlunos} setAlunoEdicao={setAlunoEdicao} />
      
      <h2>Lista de Alunos</h2>
      <ListaAlunos setAlunoEdicao={setAlunoEdicao} fetchAlunos={fetchAlunos} />
    </div>
  );
}

export default App;
