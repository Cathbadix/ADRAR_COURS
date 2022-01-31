CREATE DATABASE test1234; use test1234;
CREATE TABLE users ( id_users int not null, name_users varchar(30) not null, pwd_users varchar(100) not null, mail_users varchar(150) not null, age_users int DEFAULT null, id_towns int DEFAULT null );
CREATE TABLE towns ( id_towns int NOT null, name_towns varchar(100) NOT null, cp_towns varchar(20) NOT null );
ALTER TABLE users ADD PRIMARY KEY (id_users);
ALTER TABLE towns ADD PRIMARY KEY (id_towns);
ALTER TABLE users ADD CONSTRAINT FOREIGN KEY (id_towns) REFERENCES towns (id_towns);
ALTER TABLE users MODIFY id_users int not null AUTO_INCREMENT;
ALTER TABLE `users` ADD COLUMN phone varchar(25) DEFAULT null;
ALTER table `users` change phone phone_users varchar(25);