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
  CONSTRAINT fk_department FOREIGN KEY

);

CREATE TABLE employee (
    id int AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id)
    REFERENCES role (id) ON DELETE CASCADE,
    manager_id INT,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id)
    REFERENCES employee(id) ON DELETE SET NULL
);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Shikamaru", "Nara", 101, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Saske", "Uchiha", 102, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Kakashi", "Hatake", 103, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Minato", "Namikaze", 104, null);

INSERT INTO role (id, title, salary, department_id)
VALUES (12, "Manager", "55000", 10)

INSERT INTO role (id, title, salary, department_id)
VALUES (13, )

SELECT * FROM employee;

