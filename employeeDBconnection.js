const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'Dvaonline7!',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.connection.threadId}`);

    connection.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            throw err;
        }

        console.log(result[0].employee);
    })
});