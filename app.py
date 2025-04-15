from flask import Flask, request, jsonify
from flask_cors import CORS
from database import conectar

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Permitindo todas as origens com suporte a cookies, se precisar

@app.route('/alunos', methods=['POST'])
def cadastrar_aluno():
    try:
        dados = request.json
        print("Recebido:", dados)

        if not dados:
            return jsonify({'erro': 'Dados não fornecidos'}), 400

        conn = conectar()
        cursor = conn.cursor()
        cursor.execute(''' 
            INSERT INTO alunos (nome, idade, sexo, objetivo, tipo_plano, data_matricula)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (
            dados['nome'],
            dados['idade'],
            dados['sexo'],
            dados['objetivo'],
            dados['tipo_plano'],
            dados['data_matricula']
        ))
        conn.commit()
        conn.close()
        return jsonify({'mensagem': 'Aluno cadastrado com sucesso!'}), 201
    except Exception as e:
        print(f"Erro ao cadastrar aluno: {e}")
        return jsonify({'erro': str(e)}), 500

@app.route('/alunos', methods=['GET'])
def listar_alunos():
    try:
        conn = conectar()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM alunos")
        alunos = cursor.fetchall()
        conn.close()

        lista = []
        for aluno in alunos:
            lista.append({
                'id': aluno[0],
                'nome': aluno[1],
                'idade': aluno[2],
                'sexo': aluno[3],
                'objetivo': aluno[4],
                'frequencia': aluno[5],
                'tipo_plano': aluno[6],
                'data_matricula': aluno[7]
            })

        return jsonify(lista), 200
    except Exception as e:
        print(f"Erro ao listar alunos: {e}")
        return jsonify({'erro': str(e)}), 500

@app.route('/alunos/<int:id>', methods=['PUT', 'OPTIONS'])
def atualizar_aluno(id):
    try:
        if request.method == 'OPTIONS':
            return jsonify({'mensagem': 'Preflight OK'}), 200

        dados = request.json
        print(f"Atualizando aluno {id} com dados: {dados}")
        
        if not dados:
            return jsonify({'erro': 'Dados não fornecidos'}), 400

        conn = conectar()
        cursor = conn.cursor()
        cursor.execute('''
            UPDATE alunos
            SET nome = ?, idade = ?, sexo = ?, objetivo = ?, tipo_plano = ?, data_matricula = ?
            WHERE id = ?
        ''', (
            dados['nome'],
            dados['idade'],
            dados['sexo'],
            dados['objetivo'],
            dados['tipo_plano'],
            dados['data_matricula'],
            id
        ))
        conn.commit()
        conn.close()
        
        return jsonify({'mensagem': 'Aluno atualizado com sucesso!'}), 200
    except Exception as e:
        print(f"Erro ao atualizar aluno: {e}")
        return jsonify({'erro': str(e)}), 500

@app.route('/alunos/<int:id>', methods=['DELETE'])
def excluir_aluno(id):
    try:
        conn = conectar()
        cursor = conn.cursor()
        cursor.execute('''DELETE FROM alunos WHERE id = ?''', (id,))
        conn.commit()
        conn.close()
        return jsonify({'mensagem': 'Aluno excluído com sucesso!'}), 200
    except Exception as e:
        print(f"Erro ao excluir aluno: {e}")
        return jsonify({'erro': str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)
