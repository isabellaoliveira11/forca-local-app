import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { Aluno } from './interface';
import {
  FormContainer,
  Input,
  Select,
  Label,
  Button,
  ErrorMessage,
  FlexContainer
} from './styles'; // Importando os Styled Components

interface FormAlunoProps {
  alunoEdicao: Aluno | null;
  fetchAlunos: () => void;
  setAlunoEdicao: (aluno: Aluno | null) => void;
}

function FormAluno({ alunoEdicao, fetchAlunos, setAlunoEdicao }: FormAlunoProps) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState<number | ''>(''); 
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
    <FormContainer onSubmit={handleSubmit}>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <div>
        <Label htmlFor="nome">Nome:</Label>
        <Input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
      </div>
      <div>
        <Label htmlFor="idade">Idade:</Label>
        <Input
          id="idade"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="Idade"
        />
      </div>
      <div>
        <Label htmlFor="sexo">Sexo:</Label>
        <Select
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value="">Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="objetivo">Objetivo:</Label>
        <Select
          id="objetivo"
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
        >
          <option value="">Selecione o objetivo</option>
          <option value="Emagrecimento">Emagrecimento</option>
          <option value="Ganho de Massa">Ganho de Massa</option>
          <option value="Manutenção">Manutenção</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="tipo_plano">Tipo de Plano:</Label>
        <Select
          id="tipo_plano"
          value={tipo_plano}
          onChange={(e) => setTipoPlano(e.target.value)}
        >
          <option value="">Selecione o tipo de plano</option>
          <option value="Mensal">Mensal</option>
          <option value="Trimestral">Trimestral</option>
          <option value="Semestral">Semestral</option>
          <option value="Anual">Anual</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="data_matricula">Data Matrícula:</Label>
        <Input
          id="data_matricula"
          type="date"
          value={dataMatricula}
          onChange={(e) => setDataMatricula(e.target.value)}
        />
      </div>
      <FlexContainer>
        <Button primary type="submit">
          {alunoEdicao ? 'Atualizar Aluno' : 'Cadastrar Aluno'}
        </Button>
        <Button type="button" onClick={resetForm}>
          Limpar
        </Button>
      </FlexContainer>
    </FormContainer>
  );
}

export default FormAluno;
