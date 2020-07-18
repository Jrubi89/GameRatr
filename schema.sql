DROP DATABASE IF EXISTS game_db;

CREATE DATABASE game_db;

USE game_db;

CREATE TABLE games (
id INT auto_increment,
cover_art varchar(10000),
game_name varchar(100),
platform varchar(50),
genre varchar(50),
primary key (id)
);

CREATE TABLE rating_input (
id INT auto_increment,
game_name varchar(100),
rating dec(20),
primary key (id)
);

