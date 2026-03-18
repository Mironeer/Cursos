const express = require("express")
const cors = require("cors")

const cursoRoutes = require("./routes/cursoRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", cursoRoutes)

const PORT = 3000

app.listen(PORT,()=>{
    console.log("Servidor rodando na porta 3000")
})