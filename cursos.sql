CREATE DATABASE cursos_db;

USE cursos_db;

CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10,2),
    carga_horaria INT
);