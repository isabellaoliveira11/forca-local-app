import sqlite3

def conectar():
    conn = sqlite3.connect('forca_local.db')
    return conn

def excluir_tabela():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS alunos")
    conn.commit()
    conn.close()

def criar_tabela():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        idade INTEGER,
        sexo TEXT,
        objetivo TEXT,
        frequencia INTEGER,
        tipo_plano TEXT,
        data_matricula DATE,
        status TEXT DEFAULT 'ativo'
    )''')
    conn.commit()
    conn.close()

# Excluir a tabela existente e criar novamente
excluir_tabela()
criar_tabela()
