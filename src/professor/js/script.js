// identificar elementos da DOM
var cadastroAtividades = document.getElementById('cadastroAtividades');
var botaoCadastro = document.getElementById('registrar');
var mensagemSucesso = document.getElementById('alert-msg');

function cadastrarAtividade() {
    var inputAtividade = document.getElementById('inputAtividade').value;
    var lista = document.getElementById("listaAtividades").innerHTML; 
    lista = lista + '<li class="list-group-item">' + inputAtividade + '</li>'; //adiciona item à lista

    document.getElementById("listaAtividades").innerHTML = lista; //altera o valor da lista de atividades com a nova atividade
}