CREATE DATABASE DB_aquanerdz;

use DB_aquanerdz;

CREATE TABLE cargos(
idCargos INT PRIMARY KEY,
nomeCargo VARCHAR(20)
);
INSERT INTO cargos(idCargos, nomeCargo) VALUES (1, 'admin'), (2, 'usuario');


CREATE TABLE users(
id INT not null primary key auto_increment,
idCargo INT,
nome varchar(60),
email varchar(60) UNIQUE,
senha varchar(150),
telefone bigint,
FOREIGN KEY (idCargo) REFERENCES cargos(idCargos)
);

INSERT INTO users(idCargo, nome, email, senha, telefone) values (2 ,'felipe', 'auj95094ghjfhga', 'skasjhajhsjah', 14991463513);
