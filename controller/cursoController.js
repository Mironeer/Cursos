const CursoRepository = require("../repository/cursoRepository")

const CursoController = {

    listar(req,res){

        CursoRepository.listar((erro,resultado)=>{
            if(erro){
                res.status(500).json({erro:"Erro ao buscar cursos"})
            }else{
                res.json(resultado)
            }
        })

    },

    criar(req,res){

        const curso = req.body

        CursoRepository.inserir(curso,(erro,resultado)=>{
            if(erro){
                res.status(500).json(erro)
            }else{
                res.json({mensagem:"Curso criado com sucesso"})
            }
        })

    },

    atualizar(req,res){

        const id = req.params.id
        const curso = req.body

        CursoRepository.atualizar(id,curso,(erro,resultado)=>{
            if(erro){
                res.status(500).json(erro)
            }else{
                res.json({mensagem:"Curso atualizado"})
            }
        })

    },

    deletar(req,res){

        const id = req.params.id

        CursoRepository.deletar(id,(erro,resultado)=>{
            if(erro){
                res.status(500).json(erro)
            }else{
                res.json({mensagem:"Curso removido"})
            }
        })

    }

}

module.exports = CursoController