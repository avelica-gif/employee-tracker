const mysql = require("mysql");
const inquirer = require("inquirer");
const ctable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Dvaonline7!',
    database: 'employees_db',
});

const init = () => {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Would you like to do?",
            choices: ["ADD", "VIEW", "UPDATE", "END"]
        })
        .then((answer) => {
            if (answer.action === "ADD") {
                addCategory();
            }
            else if (answer.action === "VIEW") {
                viewCategory();
            }
            else if (answer.action === "UPDATE") {
                updateRole();
            }
            else {
                connection.end();
            }
        });
};

const addCategory = () => {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What category would you like to add?",
            choices: ["DEPARTMENT", "ROLE", "EMPLOYEE"]
        })
        .then((answer) => {
            if (answer.action === "DEPARTMENT") {
                addDept();
            }
            else if (answer.action === "ROLE") {
                addRole();
            }
            else if (answer.action === "EMPLOYEE") {
                addEmployee();
            }

        });
};

function addDept() {
    inquirer
        .prompt(

            {
                type: 'input',
                message: 'What is the departments name?',
                name: 'dept_name',
            },
        )

        .then((response) => {
            console.log(response);
        })
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the role title?',
                name: 'role',
            },
            {
                type: 'input',
                message: 'What is the salary for the role?',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'What is the id number of the department?',
                name: 'department'
            }

        ])

        .then((response) => {
            console.log(response);
        })
}

function addEmployee() {
    inquirer
        .prompt([

            {
                type: 'input',
                message: 'What is their first name?',
                name: 'first_name',
            },
            {
                type: 'input',
                message: 'What is their last name?',
                name: 'last_name',
            },
            {
                type: 'input',
                message: 'What is their role?',
                name: 'role',
            },
        ])

        .then((response) => {
            console.table(response);


        })


}




const updateRole = () => {
    inquirer
        .prompt([
            {
                name: "employee",
                type: "list",
                message: "Who would you like to update?",
                choices: ["EMPLOYEES GO HERES"]
            },

            {
                type: 'input',
                message: 'What is their new role id?',
                name: 'role_id',
            }
        ])
        .then((response) => {
            updateRole(response);
        })


};





connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    init();


});