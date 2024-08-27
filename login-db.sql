CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    orgao VARCHAR(100),
    numero_matricula VARCHAR(50) UNIQUE NOT NULL,
    cargo VARCHAR(100),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- Armazenar hash da senha
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

