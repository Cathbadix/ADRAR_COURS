-- Création base de donnée

CREATE DATABASE `ticket`; 
use `ticket`;

CREATE TABLE `articles` (
    id_article int not null PRIMARY KEY AUTO_INCREMENT,
    nom_article varchar(50) not null,
    prix_article float not null
);

CREATE TABLE `tickets` (
    id_ticket int not null PRIMARY KEY AUTO_INCREMENT,
    date_ticket date not null,
    id_vendeur int DEFAULT null
);

CREATE TABLE `ajouter` (
    id_ticket int,
    id_article int,
    qtx int not null,
    PRIMARY KEY (id_ticket, id_article),
    FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket),
    FOREIGN KEY (id_article) REFERENCES articles(id_article)
);

CREATE TABLE `vendeurs` (
    id_vendeur int not null PRIMARY KEY AUTO_INCREMENT,
    nom_vendeur varchar(50) not null,
    prenom_vendeur varchar(50)not null
);

ALTER TABLE `tickets` ADD CONSTRAINT FOREIGN KEY (id_vendeur) REFERENCES `vendeurs` (id_vendeur);

-- Ajout de donnée

INSERT INTO `articles` (nom_article, prix_article) VALUES 
("verre", "1"),
("couteau", "2"),
("assiette", "2"),
("fourchette", "2"),
("cuillere", "1");


INSERT INTO `vendeurs` (nom_vendeur, prenom_vendeur) VALUES
("Dupont", "Pierre"),
("Leblanc", "Pierre"),
("Mass", "Jeanne"),
("Bros", "Mario"),
("Mousse", "Mickey");

INSERT INTO `tickets` (date_ticket, id_vendeur) VALUES
("2022-01-12", 1),
("2022-01-10", 3),
("2022-01-09", 5),
("2022-01-05", 2),
("2022-01-03", 4),
("2022-01-15", 1);

INSERT INTO `ajouter` (id_ticket, id_article, qtx) VALUES
(1, 2, 8),
(2, 3, 5),
(3, 4, 20),
(4, 5, 15),
(5, 1, 10),
(6, 2, 10);