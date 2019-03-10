### Schema
CREATE DATABASE taskmanager_db;
USE taskmanager_db;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT,
	task_name varchar(255) NOT NULL,
    completed boolean default false,
	PRIMARY KEY (id)
);
