CREATE DATABASE zoo;
use zoo;

CREATE TABLE `role` (
    id_role int not null PRIMARY KEY AUTO_INCREMENT,
    nom varchar(150) not null
);

CREATE TABLE `users` (
    id_user int not null PRIMARY KEY AUTO_INCREMENT,
    nom varchar(150) not null,
    prenom varchar(150) not null,
    mail varchar(150) not null,
    password varchar(150) not null
);

CREATE TABLE `possede` (
    id_user int,
    id_role int,
    PRIMARY KEY (id_user, id_role),
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    FOREIGN KEY (id_role) REFERENCES role(id_role)
);

CREATE TABLE `journal_tracage` (
    id_tracage int not null PRIMARY KEY AUTO_INCREMENT,
    date_heure datetime not null,
    note text not null,
    id_user int DEFAULT null
);

CREATE TABLE `animal` (
    numero_puce varchar(100) not null PRIMARY KEY,
    nom varchar(150) not null,
    sexe tinyInt(1) not null,
    id_enclos int DEFAULT null,
    id_race int DEFAULT null
);

CREATE TABLE `trace` (
    numero_puce varchar(100),
    id_tracage int,
    PRIMARY KEY (numero_puce, id_tracage),
    FOREIGN KEY (numero_puce) REFERENCES animal(numero_puce),
    FOREIGN KEY (id_tracage) REFERENCES journal_tracage(id_tracage)
);

CREATE TABLE `enclos` (
    id_enclos int not null PRIMARY KEY AUTO_INCREMENT,
    nom varchar(150) not null,
    capacite_max int
);

CREATE TABLE `race` (
    id_race int not null PRIMARY KEY AUTO_INCREMENT,
    nom varchar(150) not null
);

CREATE TABLE `habiter` (
    id_race int,
    id_enclos int,
    PRIMARY KEY (id_race,id_enclos),
    FOREIGN KEY (id_race) REFERENCES race(id_race),
    FOREIGN KEY (id_enclos) REFERENCES enclos(id_enclos)
);

ALTER TABLE `journal_tracage` ADD CONSTRAINT FOREIGN KEY (id_user) REFERENCES `users` (id_user);
ALTER TABLE `animal` ADD CONSTRAINT FOREIGN KEY (id_enclos) REFERENCES `enclos` (id_enclos);
ALTER TABLE `animal` ADD CONSTRAINT FOREIGN KEY (id_race) REFERENCES `race` (id_race);



