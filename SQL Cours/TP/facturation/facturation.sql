CREATE DATABASE facturation; 
use facturation;
CREATE TABLE `clients` (
    id_client int not null,
    nom_client varchar(30) not null,
    prenom_client varchar(30) not null,
    telephone_client varchar(25) not null,
    id_ville int DEFAULT null
);

CREATE TABLE `factures` (
    id_facture int not null,
    numero_facture varchar(30) not null,
    id_client int DEFAULT null
);
CREATE TABLE `villes` (
    id_ville int not null,
    nom_ville varchar(30) not null,
    cp_ville varchar(20) not null
)

ALTER TABLE clients ADD PRIMARY KEY (id_client);
ALTER TABLE factures ADD PRIMARY KEY (id_facture);
ALTER TABLE villes ADD PRIMARY KEY (id_ville);

ALTER TABLE clients MODIFY id_client int not null AUTO_INCREMENT;
ALTER TABLE factures MODIFY id_facture int not null AUTO_INCREMENT;
ALTER TABLE villes MODIFY id_ville int not null AUTO_INCREMENT;

ALTER TABLE clients ADD CONSTRAINT FOREIGN KEY (id_ville) REFERENCES villes (id_ville);
ALTER TABLE factures ADD CONSTRAINT FOREIGN KEY (id_client) REFERENCES clients (id_client);

INSERT INTO `villes` (nom_ville, cp_ville) VALUES 
("Beverly hills", "8965"),
("Los Angeles", "8458"),
("New York", "8654");

INSERT INTO `clients` (nom_client, prenom_client, telephone_client, id_ville) VALUES 
("Murray", "Bill", "5558965", 1),
("Murphy", "Cyllian", "5558458", 3),
("Cameron", "James", "5558654", 1);

INSERT INTO `factures` (numero_facture, id_client) VALUES 
("556895", 1),
("568595", 2),
("458752", 3);
