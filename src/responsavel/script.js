
function create() {
        const button= document.querySelectorAll('#');
        for(var y= 0; y < button.length ; y++) {//alterado indice de i para X
        button[y].addEventListener('click', create);
    }
}

function alertaFucn() {
    alert("Tem certeza? Não é possivel desfazer a matricula!");
}




function validaCPF(input){
    const cfpformatado = input.value.replace(/\D/g, '')
    let mensagem = ''
    if(!checarCPFrepedito(cfpformatado)){
        mensagem=" CPF digitado não é valido !! "
    }

    input.setCustmValidity(mensagem)
}
function checarCPFrepedito(cpf){
    const valoresRepetidos = [
        '00000000000','11111111111', '222222222222','33333333333','44444444444', '55555555555',
        '66666666666', '77777777777', '88888888888', '99999999999'
    ]
    let cpfValido=true
    valoresRepetidos.forEach(valor => {
        if(valor ==cpf){
            cpfValido =false
        }
    })
    return cpfValido
}

function enviarMensagem() {
  var mensagem = document.getElementById("mensagem").value;
  var mensagemEnviada  = document.getElementById("mensagemEnviada").innerHTML;
  mensagem = '<p class="badge bg-primary text-wrap fs-6 text-start">' + mensagem + '</p>';
  
  document.getElementById("mensagemEnviada").innerHTML = mensagem;
  console.log(mensagem)
}

function cadastrarAtividade() {
    var lista = document.getElementById("listaAtividades").innerHTML; // identificar elementos da DOM
  
    if (listaAtividades.length < 3) {
      // limite de atividades extras = 3
      var inputAtividade = document.getElementById("inputAtividade").value;
  
      lista = lista + '<li class="list-group-item">' + inputAtividade + "</li>"; // adiciona item à lista
      document.getElementById("listaAtividades").innerHTML = lista; // altera o valor da lista de atividades com a nova atividade
  
      listaAtividades.push(inputAtividade);
      document.getElementById("avisoCadastroSucesso").style.display = "initial"; // aparece cadastro sucesso
    } else {
      document.getElementById("avisoCadastroSucesso").style.display = "none"; // desaparece sucesso
      document.getElementById("avisoCadastroFalha").style.display = "initial"; // aparece falha
    }
  }