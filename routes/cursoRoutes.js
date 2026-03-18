const express = require("express")
const router = express.Router()

const CursoController = require("../controller/cursoController")

router.get("/cursos", CursoController.listar)

router.post("/cursos", CursoController.criar)

router.put("/cursos/:id", CursoController.atualizar)

router.delete("/cursos/:id", CursoController.deletar)

module.exports = router