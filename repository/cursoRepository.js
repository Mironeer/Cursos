const connection = require("../database/connection")

const CursoRepository = {

    listar(callback){
        connection.query(
            "SELECT * FROM cursos",
            callback
        )
    },

    inserir(curso, callback){
        connection.query(
            "INSERT INTO cursos SET ?",
            curso,
            callback
        )
    },

    atualizar(id, curso, callback){
        connection.query(
            "UPDATE cursos SET ? WHERE id = ?",
            [curso,id],
            callback
        )
    },

    deletar(id, callback){
        connection.query(
            "DELETE FROM cursos WHERE id = ?",
            [id],
            callback
        )
    }

}

module.exports = CursoRepository