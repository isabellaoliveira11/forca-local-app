import axios from 'axios';
import { Aluno } from './interface';
import { useState, useEffect, FormEvent } from 'react';

interface FormAlunoProps {
  alunoEdicao: Aluno | null;
  fetchAlunos: () => void;
  setAlunoEdicao: (aluno: Aluno | null) => void;
}

function FormAluno({ alunoEdicao, fetchAlunos, setAlunoEdicao }: FormAlunoProps) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState<number | ''>(''); // Número ou vazio
  const [sexo, setSexo] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [tipo_plano, setTipoPlano] = useState('');
  const [dataMatricula, setDataMatricula] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (alunoEdicao) {
      setNome(alunoEdicao.nome);
      setIdade(alunoEdicao.idade);
      setSexo(alunoEdicao.sexo);
      setObjetivo(alunoEdicao.objetivo);
      setTipoPlano(alunoEdicao.tipo_plano);
      setDataMatricula(alunoEdicao.data_matricula);
    }
  }, [alunoEdicao]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const alunoData = {
      nome,
      idade: Number(idade),
      sexo,
      objetivo,
      tipo_plano,
      data_matricula: dataMatricula,
    };

    try {
      if (alunoEdicao) {
        await axios.put(`http://127.0.0.1:5000/alunos/${alunoEdicao.id}`, alunoData);
      } else {
        await axios.post('http://127.0.0.1:5000/alunos', alunoData);
      }

      fetchAlunos();
      setAlunoEdicao(null);
      resetForm();
      setErrorMessage(null);
    } catch (error: any) {
      console.error("Erro ao salvar aluno", error);
      setErrorMessage("Ocorreu um erro ao salvar o aluno. Por favor, tente novamente.");
    }
  };

  const resetForm = () => {
    setNome('');
    setIdade('');
    setSexo('');
    setObjetivo('');
    setTipoPlano('');
    setDataMatricula('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {errorMessage && <div className="text-red-500 text-sm italic mb-4">{errorMessage}</div>}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">Nome:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idade">Idade:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="idade"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="Idade"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexo">Sexo:</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value="">Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="objetivo">Objetivo:</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="objetivo"
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
        >
          <option value="">Selecione o objetivo</option>
          <option value="Emagrecimento">Emagrecimento</option>
          <option value="Ganho de Massa">Ganho de Massa</option>
          <option value="Manutenção">Manutenção</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo_plano">Tipo de Plano:</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tipo_plano"
          value={tipo_plano}
          onChange={(e) => setTipoPlano(e.target.value)}
        >
          <option value="">Selecione o tipo de plano</option>
          <option value="Mensal">Mensal</option>
          <option value="Trimestral">Trimestral</option>
          <option value="Semestral">Semestral</option>
          <option value="Anual">Anual</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="data_matricula">Data Matrícula:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="data_matricula"
          type="date"
          value={dataMatricula}
          onChange={(e) => setDataMatricula(e.target.value)}
          placeholder="Data Matrícula"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {alunoEdicao ? 'Atualizar Aluno' : 'Cadastrar Aluno'}
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={resetForm}
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

export default FormAluno;