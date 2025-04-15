import requests

url = 'http://127.0.0.1:5000/alunos'
dados = {
    "nome": "Isabela",
    "idade": 25,
    "sexo": "Feminino",
    "objetivo": "Definição",
    "frequencia": "4x por semana",
    "tipo_plano": "Mensal",
    "data_matricula": "2025-04-14"
}

resposta = requests.post(url, json=dados)
print("Status:", resposta.status_code)
print("Resposta Bruta:", resposta.text)
