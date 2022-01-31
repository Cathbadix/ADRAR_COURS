CREATE DATABASE `location`; 
use `location`;

CREATE TABLE `responsables` (
    id_responsable int not null PRIMARY KEY AUTO_INCREMENT,
    nom_responsable varchar(50) not null,
    prenom_responsable varchar(50) not null,
    telephone_responsable varchar(30) not null,
    mail_responsable varchar(100) not null,
    id_agence int DEFAULT null
);

CREATE TABLE `agences` (
    id_agence int not null PRIMARY KEY AUTO_INCREMENT,
    numero_rue_agence varchar(20) not null,
    nom_rue_agence varchar(255) not null,
    id_ville int DEFAULT null
);

CREATE TABLE `villes` (
    id_ville int not null PRIMARY KEY AUTO_INCREMENT,
    nom_ville varchar(100) not null,
    cp_ville varchar(30) not null
);

CREATE TABLE `voitures` (
    id_voiture int not null PRIMARY KEY AUTO_INCREMENT,
    immatriculation_voitures varchar(50) not null,
    louer_voiture tinyint(1) not null,
    marque_voiture varchar(50) not null,
    id_couleur int DEFAULT null
);

CREATE TABLE `couleurs` (
    id_couleur int not null PRIMARY KEY AUTO_INCREMENT,
    nom_couleur varchar(30) not null
);

CREATE TABLE `correspondre` (
    id_agence int,
    id_voiture int,
    PRIMARY KEY(id_agence, id_voiture),
    FOREIGN KEY(id_agence) REFERENCES agences(id_agence),
    FOREIGN KEY(id_voiture) REFERENCES voitures(id_voiture)
);

ALTER TABLE `responsables` ADD CONSTRAINT FOREIGN KEY (id_agence) REFERENCES `agences` (id_agence);
ALTER TABLE `agences` ADD CONSTRAINT FOREIGN KEY (id_ville) REFERENCES `villes` (id_ville);
ALTER TABLE `voitures` ADD CONSTRAINT FOREIGN KEY (id_couleur) REFERENCES `couleurs` (id_couleur);



INSERT INTO `couleurs` (nom_couleur) VALUES 
("Noire"),
("Blanches"),
("Grises"),
("Rouges");

INSERT INTO `voitures` (louer_voiture, marque_voiture, id_couleur) VALUES 
(0, "Porche", 1),
(1, "Dacia", 2),
(1, "Ford", 3),
(0, "Renault", 4);

INSERT INTO `villes` (nom_ville, cp_ville) VALUES 
("Paris", "75000"),
("Reims", "51100"),
("Montpellier", "34000"),
("Lunel", "34400");

INSERT INTO `agences` (numero_rue_agence, nom_rue_agence, id_ville) VALUES 
("8", "Marie Stuart", 2),
("15", "Champs Elyssé", 1),
("200", "Saint Fructueux", 4),
("30", "Louis Pasteur", 3);

INSERT INTO `responsables` (nom_responsable, prenom_responsable, telephone_responsable, mail_responsable, id_agence) VALUES 
("Dupont", "Pierre", "0123456789", "dp@mail.com", 4),
("Leblanc", "Pierre", "0134567892", "lp@gmail.com", 1),
("Lecoq", "Jean", "0145678923", "vlj@laposte.net", 3),
("Darmont", "François", "0156789234", "df@hotmail.fr", 2);


INSERT INTO `correspondre` (id_agence, id_voiture) VALUES 
( 1, 1),
( 3, 4),
( 2, 3),
( 3, 2);

-- 2eme partie
INSERT INTO `villes` (nom_ville, cp_ville) VALUES 
("Toukilou", "22222");


INSERT INTO `agences` (numero_rue_agence, nom_rue_agence, id_ville) VALUES 
("22222", "avenue bloblocar", 5);

INSERT INTO `responsables` (nom_responsable, prenom_responsable, telephone_responsable, mail_responsable, id_agence) VALUES 
("Fouwhell", "Joulou", "8811551188", "toukilou@atoutroule.fr", 5);

INSERT INTO `couleurs` (nom_couleur) VALUES 
("Jaune"),
("Orange"),
("Marron");

INSERT INTO `voitures` (louer_voiture, marque_voiture, id_couleur) VALUES 
(1, "Fiot 7014", 5),
(1, "Farp kagi", 6);

UPDATE `voitures` SET id_couleur = 7 WHERE id_voiture = 3;

ALTER TABLE `voitures` CHANGE marque_voiture marque_et_modele varchar(50);

ALTER TABLE `responsables` MODIFY mail_responsable varchar(255);

ALTER TABLE `voitures` DROP column louer_voiture;

DELETE FROM `voitures` WHERE `voitures`.`id_voiture` = 2;

UPDATE `responsables` SET telephone_responsable = "46256314980" WHERE nom_responsable = "Fouwhell" and prenom_responsable = "Joulou";

ALTER TABLE `voitures` CHANGE marque_et_modele marque varchar(50);

ALTER TABLE `voitures` ADD column modele varchar(50);

UPDATE `voitures` SET id_couleur = 7 WHERE id_voiture = 1;

DELETE FROM `voitures` WHERE id_couleur = 7;