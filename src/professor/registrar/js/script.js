// Registrar aulas
var materiaDia = document.querySelector("select"); // identifica select na página
var listaAulas = []; // gera array vazio das aulas
var avisoLimiteMaterias = document.getElementById("avisoLimiteMaterias");
var avisoAulaRegistrada = document.getElementById("avisoAulaRegistrada"); // identifica avisos escondidos

function registrarAula() {
  if (listaAulas.length < 1) {
    // limite de aulas 1 {
    var tabelaAulas = document.getElementById("tabelaAulas").innerHTML; // identifica tabela de matérias

    var materiaNome = document.getElementById("materiaNome").value; // identifica elementos do input do usuário
    var opcaoMateria = materiaDia.value.toString(); // transforma valor dos dias no menu select em string

    tabelaAulas =
      tabelaAulas +
      '<tr><th scope="row">' +
      materiaNome +
      "</th><td>" +
      opcaoMateria +
      "</td></tr>"; // gera nova linha na tabela

    listaAulas.push(materiaNome); // adiciona nova matéria ao array
    document.getElementById("tabelaAulas").innerHTML = tabelaAulas;
    document.getElementById("avisoAulaRegistrada").style.display = "initial";
  } else {
    document.getElementById("avisoLimiteMaterias").style.display = "initial"; // mostra aviso
    document.getElementById("avisoAulaRegistrada").style.display = "none";
  }
}

// Registrar provas
var listaMaterias = document.querySelector("select"); // identifica select na página
var avisoProvaCadastrada = document.getElementById("avisoProvaCadastrada");

function registrarProva() {
  var tabelaProvas = document.getElementById("tabelaProvas").innerHTML; // identifica tabela de provas

  var materiaProva = listaMaterias.value.toString(); // transforma valor no menu select em string
  var dataProva = document.getElementById("dataProva").value;
  var nomeProva = document.querySelector(
    'input[name="nomeProva"]:checked'
  ).value; // identifica elementos do input do usuário

  tabelaProvas =
    tabelaProvas +
    '<tr><th scope="row">' +
    materiaProva +
    "</th><td>" +
    dataProva +
    "</td><td>" +
    nomeProva.toString() +
    "</td></tr>"; // gera nova linha na tabela

  document.getElementById("tabelaProvas").innerHTML = tabelaProvas;
  avisoProvaCadastrada.style.display = "initial";
}

// Registrar atividades extras
var listaAtividades = []; // gera array vazio de atividades
var diasAtividade = document.querySelector("select"); // identifica select na página
var avisoAtividadeRegistrada = document.getElementById(
  "avisoAtividadeRegistrada"
); // identifica aviso escondido de sucesso
var avisoLimiteAtividades = document.getElementById("avisoLimiteAtividades");

function registrarAtividade() {
  var tabelaAtividades = document.getElementById("tabelaAtividades").innerHTML; // identifica tabela de atividades

  if (listaAtividades.length < 2) {
    var diaAtividade = diasAtividade.value.toString(); // transforma valor selecionado em string
    var nomeAtividade = document.getElementById("nomeAtividade").value;

    tabelaAtividades =
      tabelaAtividades +
      '<tr><th scope="row">' +
      nomeAtividade +
      "</th><td>" +
      diaAtividade +
      "</td></tr>";

    listaAtividades.push(nomeAtividade);
    document.getElementById("tabelaAtividades").innerHTML = tabelaAtividades;
    avisoAtividadeRegistrada.style.display = "initial";
  } else {
    avisoAtividadeRegistrada.style.display = "none";
    avisoLimiteAtividades.style.display = "initial";
  }
}
