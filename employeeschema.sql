DROP DATABASE IF EXISTS employees_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INT auto_increment PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee(
    id INT auto_increment PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL
);

INSERT INTO department(name)
VALUES
("Leaf Village"),
("Sand Village"),
("Akatsuki");


INSERT INTO role(title, salary, department_id)
VALUES
("Hokage", 80000, 1),
("Jonin", 75000, 2),
("Gunin", 20000, 1), 
("Bad Guy", 5, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ("Shikamaru", "Nara", 3, 2),
 ("Avelica", "Rubio", 4, 1);

