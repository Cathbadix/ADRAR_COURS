- créer la base de donnée test1234:

> CREATE DATABASE test1234;
> use test1234;

- créer la table `users` dans la base de donnée test1234:

> CREATE TABLE `users` ( id_users int not null, name_users varchar(30) not null, pwd_users varchar(100) not null, mail_users varchar(150) not null, age_users int DEFAULT null, id_towns int DEFAULT null );

- créer la table `towns` dans la base de donnée test1234:

> CREATE TABLE `towns` ( id_towns int NOT null, name_towns varchar(100) NOT null, cp_towns varchar(20) NOT null );

- modifier la table `users` et ajouter la PRIMARY KEY à id-users:

> ALTER TABLE `users` ADD PRIMARY KEY (id_users);

- modifier la table `towns` et ajouter la PRIMARY KEY à id_towns:

> ALTER TABLE `towns` ADD PRIMARY KEY (id_towns);

- ajouter à la table `users` la contrainte de clé étrangére (id_towns) qui fait référence à (id_towns) de la table `towns`:

> ALTER TABLE `users` ADD CONSTRAINT FOREIGN KEY (id_towns) REFERENCES `towns` (id_towns);

- ajouter l'auto increment à (id_users) de la table `users`:
> ALTER TABLE `users` MODIFY id_users int not null AUTO_INCREMENT;

>- ajouter l'auto increment à (id_towns) de la table `towns`:
>> ALTER TABLE `towns` MODIFY id_towns int not null AUTO_INCREMENT;
>- donnera actuellement une erreur de contrainte en foreign key. Il >faudra d'abord drop la contraint appliquer l'auto increment et refaire >la contrainte.

- ajouter une colonne phone dans la table `users`:
> ALTER TABLE `users` ADD COLUMN phone varchar(25) DEFAULT null;

- changer phone en phone_users de la table `users`:
> ALTER table `users` change phone phone_users varchar(25);

>- change -> modifie le type 
>- modify -> modifie la stucture

- ajouter des enregistrements:

>INSERT INTO `table` (nom_colonne1, nom_colonne2) VALUES 
>("valeur1", "valeur2"),
>("valeur1", "valeur2"),
>("valeur1", "valeur2");

