drop database if exists badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites (
id int NOT NULL AUTO_INCREMENT,
title varchar(30) NOT NULL,
release_date date NOT NULL,
rating int NOT NULL,
PRIMARY KEY(id)
)





