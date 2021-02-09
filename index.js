const mysql = require("mysql");
const inquirer = require("inquirer");

// function to initialize program
const deptPrompt() {
    inquirer
        .deptprompt([
            {
                type: 'input',
                message: 'What is the departments ID number?',
                name: 'dept_id',
            },
            {
                type: 'input',
                message: 'What is the departments name?',
                name: 'dept_name',
            },
        ];

    const rolePrompt = [
        {
            type: 'input',
            message: 'What is the id for the role?',
            name: 'role_id',
        },
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
            message: 'What is the id number of the department?'
            name: 'department'
        }
    ];

    const employeePrompt = [
        {
            type: 'input',
            message: 'what is their id?',
            name: 'employee_id',

        },
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

    ];

    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Dvaonline7!",
        database: "employee_db"
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
                    updateCategory();
                }
                else {
                    connection.end();
                }
            });
    };

    const updateCategory = () => {
        inquirer
            .prompt({
                name: "update",
                type: "list",
                message: "Which would you like to update?",
                choices: ["ROLE", "MANAGER"]
            })
            .then((answer) => {
                updateRole();
            }
        else if (answer.update === "MANAGER") {
        updateManager();
    }
});
}

const updateRole = () => {
    connection.query("SELECT CONTAT_WS"(',', employee.last_name, employee.first_name) AS)
}