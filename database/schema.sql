CREATE DATABASE IF NOT EXISTS recomkids;

USE recomkids;

CREATE TABLE IF NOT EXISTS usuario (
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    username varchar(40),
    senha varchar(40)
);

CREATE TABLE IF NOT EXISTS crianca (
    idCrianca INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    dataNascimento DATE
);

CREATE TABLE IF NOT EXISTS tarefa (
	idTarefa INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    descricao VARCHAR(500),
    pontuacao int
);