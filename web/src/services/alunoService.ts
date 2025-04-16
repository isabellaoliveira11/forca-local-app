import axios from 'axios';
import { Aluno } from '../modules/components/FormAluno/interface';

const API_URL = 'http://127.0.0.1:5000';

export const buscarAlunos = async (): Promise<Aluno[]> => {
  try {
    const response = await axios.get(`${API_URL}/alunos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
    throw error;
  }
};
