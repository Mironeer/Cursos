const url = "http://localhost:3000/api/cursos";

function mostrarMensagem(msg, tipo="success"){
    const div = document.getElementById("mensagem");
    div.innerHTML = `<div class="alert alert-${tipo}">${msg}</div>`;
    setTimeout(() => div.innerHTML = "", 3000);
}

function listarCursos(){
    fetch(url)
    .then(res => res.json())
    .then(cursos => {
        const lista = document.getElementById("listaCursos");
        lista.innerHTML = "";

        cursos.forEach(curso => {
            lista.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5>${curso.titulo}</h5>
                            <p>${curso.descricao || ""}</p>
                            <p><strong>Preço:</strong> R$ ${curso.preco}</p>
                            <p><strong>Carga horária:</strong> ${curso.carga_horaria}h</p>

                            <button class="btn btn-warning btn-sm" onclick="editarCurso(${curso.id})">
                                Editar
                            </button>

                            <button class="btn btn-danger btn-sm" onclick="deletarCurso(${curso.id})">
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    });
}

function cadastrarCurso(){
    let titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    let preco = document.getElementById("preco").value.replace(",", ".");
    let carga = document.getElementById("carga").value;

if(!titulo || !preco || !carga){
    mostrarMensagem("Nenhum campo pode estar vazio!", "danger");
    return;
}

if(isNaN(preco)){
    mostrarMensagem("Preço inválido!", "danger");
    return;
}

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            titulo,
            descricao,
            preco,
            carga_horaria: carga
        })
    })
    .then(() => {
    mostrarMensagem("Curso cadastrado!");
    listarCursos();

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("carga").value = "";
});
}

function editarCurso(id){

    const titulo = prompt("Novo título:");
    const descricao = prompt("Nova descrição:");
    let preco = prompt("Novo preço (ex: 99,90):");
    const carga = prompt("Nova carga horária:");

    preco = preco ? preco.replace(",", ".") : preco;

    fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            titulo,
            descricao,
            preco,
            carga_horaria: carga
        })
    })
    .then(() => {
        mostrarMensagem("Curso atualizado!");
        listarCursos();
    });
}

function deletarCurso(id){

    const confirmar = confirm("Tem certeza que deseja excluir este curso?");

    if(!confirmar){
        return;
    }

    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        mostrarMensagem("Curso excluído!");
        listarCursos();
    });
}
window.onload = listarCursos;