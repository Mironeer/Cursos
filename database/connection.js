const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cursos_db"
})

connection.connect((erro)=>{
    if(erro){
        console.log("Erro ao conectar no banco")
    }else{
        console.log("Conectado ao banco")
    }
})

module.exports = connection