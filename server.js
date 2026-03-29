<<<<<<< HEAD
const express = require("express");
const session = require("express-session");
const path = require("path");

const cursoRoutes = require("./routes/cursoRoutes");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "ads_projeto",
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.logado = req.session.logado || false;
    next();
});

const usuario = {
    email: "admin@admin.com",
    senha: "1234"
};

function verificarLogin(req, res, next) {
    if (req.session.logado) {
        next();
    } else {
        res.redirect("/login");
    }
}

app.use("/api/cursos", cursoRoutes);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login", { erro: null });
});

app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    if (email === usuario.email && senha === usuario.senha) {
        req.session.logado = true;
        res.redirect("/");
    } else {
        res.render("login", { erro: "Email ou senha inválidos!" });
    }
});

app.get("/detalhes/:id", verificarLogin, (req, res) => {
    res.send("Página de detalhes desativada para integração com API");
});

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
=======
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
>>>>>>> 9fcfb014f09cb0b21087be0b7c339279577d0eb8
