const mysql = require('mysql2')

const banco = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root", 
    database: "cadastro"
})

banco.connect()

module.exports = banco
