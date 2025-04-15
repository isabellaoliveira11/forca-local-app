import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Aluno } from '../FormAluno/interface';

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
    <div className="bg-white shadow-md rounded-md p-6 mt-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Lista de Alunos</h2>
      {alunos.length === 0 ? (
        <p className="text-gray-500">Não há alunos cadastrados.</p>
      ) : (
        <div className="space-y-4">
          {alunos.map((aluno) => (
            <div key={aluno.id} className="bg-gray-100 rounded-md p-4 flex items-center justify-between">
              <div>
                <p><strong className="font-semibold">Nome:</strong> {aluno.nome}</p>
                <p><strong className="font-semibold">Idade:</strong> {aluno.idade}</p>
                <p><strong className="font-semibold">Sexo:</strong> {aluno.sexo}</p>
                <p><strong className="font-semibold">Objetivo:</strong> {aluno.objetivo}</p>
                <p><strong className="font-semibold">Tipo de Plano:</strong> {aluno.tipo_plano}</p>
                <p><strong className="font-semibold">Data Matrícula:</strong> {aluno.data_matricula}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                  onClick={() => setAlunoEdicao(aluno)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                  onClick={() => handleDelete(aluno.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaAlunos;