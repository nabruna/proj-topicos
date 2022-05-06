// Cadastro de atividades extras
var listaAtividades = [];
var avisoCadastroSucesso = document.getElementById("avisoCadastroSucesso");
var avisoCadastroFalha = document.getElementById("avisoCadastroFalha");

function cadastrarAtividade() {
  var lista = document.getElementById("listaAtividades").innerHTML; // identificar elementos da DOM

  if (listaAtividades.length < 3) {
    // limite de atividades extras = 3
    var inputAtividade = document.getElementById("inputAtividade").value;

    lista = lista + '<li class="list-group-item">' + inputAtividade + "</li>"; // adiciona item à lista
    document.getElementById("listaAtividades").innerHTML = lista; // altera o valor da lista de atividades com a nova atividade

    listaAtividades.push(inputAtividade);
    document.getElementById("avisoCadastroSucesso").style.display = "initial";
  } else {
    document.getElementById("avisoCadastroSucesso").style.display = "none";
    document.getElementById("avisoCadastroFalha").style.display = "initial";
  }
}

// Aprovação de requisições
var alunoLista = document.getElementById("alunoLista"); // identifica a linha da requisição
var avisoRequisicaoAprovada = document.getElementById(
  "avisoRequisicaoAprovada"
);
var avisoRequisicaoReprovada = document.getElementById(
  "avisoRequisicaoReprovada"
);

function alertaAprovar() {
  avisoRequisicaoAprovada.style.display = "initial"; // mostra aviso
  alunoLista.style.display = "none";
}

function alertaReprovar() {
  avisoRequisicaoReprovada.style.display = "initial";
  alunoLista.style.display = "none";
}
