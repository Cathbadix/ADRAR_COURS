CREATE DATABASE ``; 
use ``;
CREATE TABLE `` (
    id_table int not null PRIMARY KEY AUTO_INCREMENT,
    nom_table varchar(50) not null,
    prenom_table varchar(50) not null,
    telephone_table varchar(25) not null,
    id_table int DEFAULT null
);

CREATE TABLE `` (
    id_table int not null PRIMARY KEY AUTO_INCREMENT,
    numero_table varchar(100) not null,
    id_table int DEFAULT null
);
CREATE TABLE `` (
    id_table int not null PRIMARY KEY AUTO_INCREMENT,
    nom_table varchar(100) not null,
    cp_table varchar(30) not null
)

ALTER TABLE `` ADD CONSTRAINT FOREIGN KEY (id_table) REFERENCES `` (id_table);
ALTER TABLE `` ADD CONSTRAINT FOREIGN KEY (id_table) REFERENCES `` (id_table);

INSERT INTO `table` (nom_colonne1, nom_colonne2) VALUES 
("valeur1", "valeur2"),
("valeur1", "valeur2"),
("valeur1", "valeur2");


