CREATE DATABASE `tp_bdd`; 
use `tp_bdd`;

CREATE TABLE users(
   user_id INT AUTO_INCREMENT,
   user_email VARCHAR(255) NOT NULL,
   user_password VARCHAR(255) NOT NULL,
   user_nickname VARCHAR(50) NOT NULL,
   PRIMARY KEY(user_id),
   UNIQUE(user_email)
);