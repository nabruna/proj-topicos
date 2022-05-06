function atividadeViolao() {
    alert("Violão adicionado");
}

function atividadeBordado() {
    alert("Bordado adicionado");
}

function atividadeGames() {
    alert("Videogames adicionado");
}

function atividadeMatematica() {
    alert("Matemática Avançada adicionada");
}

function atividadeFisica() {
    alert("Física Avançada adicionada");
}

function atividadeModa() {
    alert("Moda adicionada");
}

function atividadeFutebol() {
    alert("Futebol adicionada");
}

function atividadeBasquete() {
    alert("Basquete adicionada");
}

function atividadeVolei() {
    alert("Vôlei adicionada");
}

function atividadeFotografia() {
    alert("Fotografia retirada");
}

function atividadeHoquei() {
    alert("Hóquei no Gelo retirada");
}

function atividadeMusica() {
    alert("Música retirada");
}

function atividadeTeatro() {
    alert("Teatro retirada");
}

function enviarMensagem() {
    var mensagem = document.getElementById("mensagem").value;
    var mensagemEnviada  = document.getElementById("mensagemEnviada").innerHTML;
    mensagem = '<p class="badge bg-primary text-wrap fs-6 text-start">' + mensagem + '</p>';
    
    document.getElementById("mensagemEnviada").innerHTML = mensagem;
    console.log(mensagem)
}