CREATE DATABASE `judoka`; 
use `judoka`;

CREATE TABLE `ceintures` (
    id_ceinture int not null PRIMARY KEY AUTO_INCREMENT,
    couleur_ceinture varchar(100) not null
);

CREATE TABLE `sexes` (
    id_sexe int not null PRIMARY KEY AUTO_INCREMENT,
    nom_sexe varchar(50) not null
);


CREATE TABLE `judokas` (
    id_judoka int not null PRIMARY KEY AUTO_INCREMENT,
    nom_judoka varchar(50) not null,
    prenom_judoka varchar(50) not null,
    age_judoka date not null,
    id_ceinture int DEFAULT null,
    id_sexe int DEFAULT null
);

CREATE TABLE `competitions` (
    id_competition int not null PRIMARY KEY AUTO_INCREMENT,
    nom_competition varchar(100) not null,
    date_debut_competition date not null,
    date_fin_competition date not null
);

CREATE TABLE `comprends` (
    id_judoka int,
    id_competition int,
    PRIMARY KEY (id_judoka, id_competition),
    FOREIGN KEY (id_judoka) REFERENCES judokas(id_judoka),
    FOREIGN KEY (id_competition) REFERENCES competitions(id_competition)
);

ALTER TABLE `judokas` ADD CONSTRAINT FOREIGN KEY (id_ceinture) REFERENCES `ceintures` (id_ceinture);
ALTER TABLE `judokas` ADD CONSTRAINT FOREIGN KEY (id_sexe) REFERENCES `sexes` (id_sexe);

INSERT INTO `ceintures` (couleur_ceinture) VALUES 
("blanche"),
("blanche-jaune"),
("jaune"),
("jaune-orange"),
("orange"),
("orange-verte"),
("verte"),
("verte-bleue"),
("bleue"),
("rouge"),
("marron"),
("noire");

INSERT INTO `sexes` (nom_sexe) VALUES 
("homme"),
("femme");

INSERT INTO `judokas` (nom_judoka, prenom_judoka, age_judoka, id_ceinture, id_sexe) VALUES 
("Dupont", "Pierre", "1984-12-01", 12, 1),
("Leblanc", "Pierre", "2001-06-13", 10, 1),
("Mass", "Jeanne", "2008-04-15", 8, 2),
("Bros", "Mario", "2007-11-30", 5, 1),
("Mousse", "Mickey", "2010-01-27", 3, 1);

INSERT INTO `competitions` (nom_competition, date_debut_competition, date_fin_competition) VALUES 
("piednicker", "2021-06-12", "2021-06-13"),
("pierreafeu", "2021-08-01", "2021-08-03"),
("jackyshow", "2021-05-15", "2021-05-17"),
("cassebrique", "2021-04-02", "2021-04-03"),
("brascasser", "2021-12-22", "2021-12-23");

INSERT INTO `comprends` (id_judoka, id_competition) VALUES 
( 1, 1),
( 1, 2),
( 1, 3),
( 2, 1),
( 2, 3),
( 2, 5),
( 3, 1),
( 3, 2),
( 3, 4),
( 4, 1),
( 4, 2),
( 4, 4),
( 4, 5),
( 5, 1),
( 5, 5);

-- Requête select

SELECT * FROM `judokas`;

SELECT * FROM `judokas` WHERE id_sexe = 2;

SELECT * FROM `judokas` WHERE id_ceinture = 12;

SELECT * FROM `competitions` WHERE date_debut_competition BETWEEN ("2021-01-01" AND "2021-12-31") AND (date_fin_competition <= "2021-12-31");

SELECT * FROM `competitions`;

SELECT * FROM `judokas` WHERE age_judoka BETWEEN "1992-01-01" AND "2002-12-31";

SELECT * FROM `judokas` WHERE prenom_judoka LIKE "A%";

SELECT * FROM `judokas` WHERE id_ceinture = 3;


-- Requête de selection Jointure

SELECT nom_judoka, prenom_judoka, age_judoka, sexe_judoka, couleur_ceinture from judokas
inner join ceintures on judokas.id_ceinture = ceintures.id_ceinture;


SELECT nom_judoka, couleur_ceinture from judokas inner join ceintures on judokas.id_ceinture = ceintures.id_ceinture WHERE id_sexe = 1; 

SELECT age_judoka, couleur_ceinture from judokas 
inner join ceintures on judokas.id_ceinture = ceintures.id_ceinture 
WHERE ceintures.id_ceinture = 12;

SELECT age_judoka, couleur_ceinture from judokas 
inner join ceintures on judokas.id_ceinture = ceintures.id_ceinture 
WHERE ceintures.couleur_ceinture = "noire";

SELECT nom_judoka, prenom_judoka, nom_competition FROM comprends
inner join judokas on comprends.id_judoka = judokas.id_judoka
inner join competitions on comprends.id_competition = competitions.id_competition;

SELECT couleur_ceinture, nom_judoka, nom_competition FROM comprends
inner join judokas on comprends.id_judoka = judokas.id_judoka 
inner join competitions on comprends.id_judoka = competitions.id_competition
inner join ceintures on judokas.id_ceinture = ceintures.id_ceinture
WHERE date_debut_competition = "2021-08-01";

-- correction

SELECT prenom_judoka, couleur_ceinture from judokas 
inner join ceintures on judokas.id_ceinture = ceintures.id_ceinture 
WHERE sexe_judoka = "H";

SELECT nom_judoka, prenom_judoka, nom_compet FROM judokas 
INNER JOIN participer ON judokas.id_judoka = participer.id_judoka
INNER JOIN competitions ON participer.id_compet = competitions.id_compet;

SELECT nom_judoka, couleur_ceinture, nom_compet from competitions
INNER JOIN participer ON competitions.id_compet = participer.id_compet
INNER JOIN judokas ON participer.id_judoka = judokas.id_judoka
INNER JOIN ceintures ON judokas.id_ceinture = ceintures.id_ceinture
WHERE date_deb_compet = '2021-06-01';




