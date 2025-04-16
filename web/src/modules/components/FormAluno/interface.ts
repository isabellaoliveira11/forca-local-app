// interface.ts
export interface Aluno {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  objetivo: string;
  tipo_plano: string;
  data_matricula: string;
}

export type AlunoNovo = Omit<Aluno, 'id'>;
