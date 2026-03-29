const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cursos_db"
});

connection.connect((err) => {
    if(err){
        console.log("Erro ao conectar no banco:", err);
    } else {
        console.log("Conectado ao banco");
    }
});

module.exports = connection;