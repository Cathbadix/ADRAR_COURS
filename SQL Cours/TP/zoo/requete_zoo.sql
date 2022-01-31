INSERT INTO `enclos` (nom,capacité_max) VALUES
("Enclos de la petite ferme", 40),
("Enclos aux crocodiles", 20),
("Enclos aux gorilles", 2),
("Enclos australien", 30);

INSERT INTO `race` (nom) VALUES
("Lapin"),
("Cochon d'inde"),
("Crocodile américain"),
("Gorille des plaines"),
("Kangourou"),
("wallaby");

INSERT INTO `habiter` (id_race, id_enclos) VALUES
(1,1),
(2,1),
(3,2),
(4,3),
(5,4),
(6,4);

INSERT INTO `animal` (numero_puce, nom, sexe, id_enclos, id_race) VALUES

("ab-01","jeanbon", 1, 1, 1),
("ab-02","gerard", 1, 1, 2),
("ab-03","george", 1, 2, 3),
("ab-04","Guenièvre", 0, 3, 4),
("ab-05","mouti", 0, 4, 5),
("ab-06","chirac", 1, 4, 5);


INSERT INTO `users` (nom, prenom, mail, password) VALUES
("bailly", "benjamin", "benjaminbailly@adrar-formation.com", "azerty"),
("popo", "antoine", "antoinepopo@hotmail.fr", "popo");

INSERT INTO `journal_tracage` (date_heure, note, id_user) VALUES
('2022-01-20 10:55:49', "changement d’enclos pour Gérard le cochon d’inde vers l’enclos aux crocodiles", 1);

INSERT INTO `trace` (numero_puce, id_tracage) VALUES
("ab-02", 1);

UPDATE `animal` SET `id_enclos` = 2 WHERE `animal`.`numero_puce` = 'ab-02';

DELETE FROM `animal` WHERE `animal`.`numero_puce` = 'ab-02';

DELETE FROM `trace` WHERE `trace`.`numero_puce` = 'ab-02' AND `trace`.`id_tracage` = 1;
DELETE FROM `journal_tracage` WHERE `journal_tracage`.`id_tracage` = 1;
DELETE FROM `animal` WHERE `animal`.`numero_puce` = 'ab-02';



-----------------------------------------------------------------------------------------------

SELECT nom, numero_puce FROM `animal`;
SELECT * FROM `animal` WHERE nom = '';
SELECT nom, numero_puce FROM `animal` WHERE `sexe` = 1;

SELECT SUM(sexe = 1) as nbm FROM `animal`;

SELECT nom, 
CASE sexe 
    WHEN "0" THEN "femelle" ELSE "male" 
END as sexe
FROM `animal`;

SELECT SUM(sexe = 0) AND SUM(sexe = 1) as 'nba'
CASE sexe 
    WHEN "0" THEN "femelle" ELSE "male" 
END as sexe
FROM `animal`;


SELECT animal.nom, animal.numero_puce, race.nom FROM `animal` 
inner join race on animal.id_race = race.id_race

SELECT SUM(capacité_max) as "capacité total" FROM enclos;


SELECT animal.nom, journal_tracage.date_heure, journal_tracage.note FROM `animal`
INNER JOIN `trace` ON animal.numero_puce = trace.numero_puce
INNER JOIN `journal_tracage` ON trace.id_tracage = journal_tracage.id_tracage
WHERE date_heure <= '2020-12-31 23:59:59';


SELECT note FROM `journal_tracage` WHERE LENGTH(note) < 30;

SELECT journal_tracage.note, journal_tracage.date_heure, animal.nom, users.nom
INNER JOIN `users` ON journal_tracage.id_user = users.id_user,
INNER JOIN `trace` ON journal_tracage.id_tracage = trace.id_tracage,
INNER JOIN `animal` ON trace.numero_puce = animal.numero_puce;

FROM `journal_tracage`


SELECT journal_tracage.note, journal_tracage.date_heure, animal.nom, users.nom FROM `journal_tracage`
INNER JOIN `users` ON journal_tracage.id_user = users.id_user
INNER JOIN `trace` ON journal_tracage.id_tracage = trace.id_tracage
INNER JOIN `animal` ON trace.numero_puce = animal.numero_puce
WHERE animal.nom = "jeanbon"
ORDER BY date_heure DESC;


SELECT count(*) as "nba",
CASE sexe
WHEN "0" THEN "femelle"
ELSE "male"
END as sexe 
FROM animal
GROUP BY sexe;

SELECT id_race, nom FROM race WHERE nom LIKE "% %";

------------------------------------------------------------------------

