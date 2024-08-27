CREATE TABLE informacoes_atendimento (
    id SERIAL PRIMARY KEY,
    tipo_pessoa TEXT NOT NULL, -- Resposta à pergunta Q.1
    grau_parentesco TEXT, -- Resposta à pergunta Q.2 (só se tipo_pessoa for "familiar")
    nome VARCHAR(100), -- Resposta à pergunta Q.3
    idade INTEGER, -- Resposta à pergunta Q.4
    identidade_genero VARCHAR(50), -- Resposta à pergunta Q.5
    telefone VARCHAR(20), -- Resposta à pergunta Q.6
    regional_residencia INTEGER, -- Resposta à pergunta Q.7
    territorio_administrativo TEXT, -- Resposta à pergunta Q.8
    substancias_uso TEXT[], -- Resposta à pergunta Q.9
    tratamento_anterior BOOLEAN, -- Resposta à pergunta Q.10
    fonte_informacao TEXT[], -- Resposta à pergunta Q.11
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
