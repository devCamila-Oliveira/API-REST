CREATE DATABASE IF NOT EXISTS recomkids;

USE recomkids;

CREATE TABLE IF NOT EXISTS usuario (
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    senha VARCHAR(100),
    cargo SMALLINT,
    CONSTRAINT UC_Username UNIQUE (username)
);

INSERT INTO usuario (username, senha, cargo)
SELECT * FROM (SELECT 'admin', '$2a$10$oCMZ1thPBHCf6N/rg6bdYepETwAjhGLekNwoOxCmHmDQj9764jOLu', 1) AS tmp
WHERE NOT EXISTS (
    SELECT username FROM usuario WHERE username = 'admin'
) LIMIT 1;


CREATE TABLE IF NOT EXISTS crianca (
    idCrianca INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    dataNascimento DATE,
    idUsuario INT NOT NULL,
    CONSTRAINT FK_Crianca_Usuario FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE IF NOT EXISTS tarefa (
	idTarefa INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(500),
    pontuacaoBase int
);

CREATE TABLE IF NOT EXISTS tarefaCrianca (
	idTarefaCrianca INT AUTO_INCREMENT PRIMARY KEY,
    idTarefa INT,
    idCrianca INT,
    pontuacao INT,
    CONSTRAINT FK_TarefaCrianca_Tarefa FOREIGN KEY (idTarefa) REFERENCES tarefa(idTarefa),
    CONSTRAINT FK_TarefaCrianca_Crianca FOREIGN KEY (idCrianca) REFERENCES crianca(idCrianca)
);