DROP DATABASE IF EXISTS employees_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE employees_db;

USE employees_db;

-- Create the table plans.
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  daparment_id INT,
  

);

CREATE TABLE employee (
    id int AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT,
    
    REFERENCES role (id) ON DELETE CASCADE,
    manager_id INT,
    REFERENCES employee(id) ON DELETE SET NULL
);

-- Creates new rows containing data in all named columns --
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Shikamaru", "Nara", 101 );

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (2, "Saske", "Uchiha", 102);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (3, "Kakashi", "Hatake", 103);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (4, "Minato", "Namikaze", 104);

INSERT INTO role (id, title, salary, department_id)
VALUES (12, "Manager", "55000", 10)

INSERT INTO role (id, title, salary, department_id)
VALUES (13,  )

SELECT * FROM employee;

