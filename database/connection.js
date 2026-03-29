<<<<<<< HEAD
const mysql = require("mysql2");
=======
const mysql = require("mysql2")
>>>>>>> 9fcfb014f09cb0b21087be0b7c339279577d0eb8

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cursos_db"
<<<<<<< HEAD
});

connection.connect((err) => {
    if(err){
        console.log("Erro ao conectar no banco:", err);
    } else {
        console.log("Conectado ao banco");
    }
});

module.exports = connection;
=======
})

connection.connect((erro)=>{
    if(erro){
        console.log("Erro ao conectar no banco")
    }else{
        console.log("Conectado ao banco")
    }
})

module.exports = connection
>>>>>>> 9fcfb014f09cb0b21087be0b7c339279577d0eb8
