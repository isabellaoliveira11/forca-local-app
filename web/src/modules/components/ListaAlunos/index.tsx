import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Aluno } from '../FormAluno/interface';
import { 
  Container, 
  Title, 
  NoAlunosMessage, 
  AlunoCard, 
  AlunoInfo, 
  ButtonGroup, 
  EditButton, 
  DeleteButton 
} from './styles';

interface ListaAlunosProps {
  setAlunoEdicao: (aluno: Aluno) => void;
  fetchAlunos: () => void;
}

const ListaAlunos: React.FC<ListaAlunosProps> = ({ setAlunoEdicao, fetchAlunos }) => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/alunos');
        setAlunos(response.data);
      } catch (error) {
        setError('Erro ao buscar alunos');
        console.error('Erro ao buscar alunos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/alunos/${id}`);
      await fetchAlunos(); // Atualiza a lista com base no backend
      alert('Aluno excluído com sucesso!');
    } catch (error) {
      setError('Erro ao excluir aluno');
      console.error('Erro ao excluir aluno:', error);
    }
  };

  if (loading) return <p className="text-gray-600">Carregando alunos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Container>
      <Title>Lista de Alunos</Title>
      {alunos.length === 0 ? (
        <NoAlunosMessage>Não há alunos cadastrados.</NoAlunosMessage>
      ) : (
        <div>
          {alunos.map((aluno) => (
            <AlunoCard key={aluno.id}>
              <AlunoInfo>
                <p><strong>Nome:</strong> {aluno.nome}</p>
                <p><strong>Idade:</strong> {aluno.idade}</p>
                <p><strong>Sexo:</strong> {aluno.sexo}</p>
                <p><strong>Objetivo:</strong> {aluno.objetivo}</p>
                <p><strong>Tipo de Plano:</strong> {aluno.tipo_plano}</p>
                <p><strong>Data Matrícula:</strong> {aluno.data_matricula}</p>
              </AlunoInfo>
              <ButtonGroup>
                <EditButton onClick={() => setAlunoEdicao(aluno)}>
                  Editar
                </EditButton>
                <DeleteButton onClick={() => handleDelete(aluno.id)}>
                  Excluir
                </DeleteButton>
              </ButtonGroup>
            </AlunoCard>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ListaAlunos;
