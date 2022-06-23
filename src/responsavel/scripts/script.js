
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



// Cadastro de atividades extras
var listaAtividades = []; // array para a lista de atividades
var avisoCadastroSucesso = document.getElementById("avisoCadastroSucesso"); // avisos na DOM
var avisoCadastroFalha = document.getElementById("avisoCadastroFalha");

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


// Aprovação de requisições
var alunoLista = document.getElementById("alunoLista"); // identifica a linha da requisição
var avisoRequisicaoAprovada = document.getElementById(
  "avisoRequisicaoAprovada"
);
var avisoRequisicaoReprovada = document.getElementById(
  "avisoRequisicaoReprovada"
);

function alertaAprovar() {
  avisoRequisicaoAprovada.style.display = "initial"; // mostra aviso de aprovação
  alunoLista.style.display = "none"; // remove a linha do aluno
}

function alertaReprovar() {
  avisoRequisicaoReprovada.style.display = "initial"; // mostra aviso de reprovação
  alunoLista.style.display = "none";
}


//Validar CPF

function validarCPF(cpf) {	
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf == '') return false;	
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 || 
            cpf == "00000000000" || 
            cpf == "11111111111" || 
            cpf == "22222222222" || 
            cpf == "33333333333" || 
            cpf == "44444444444" || 
            cpf == "55555555555" || 
            cpf == "66666666666" || 
            cpf == "77777777777" || 
            cpf == "88888888888" || 
            cpf == "99999999999")
                return false;		
        // Valida 1o digito	
        add = 0;	
        for (i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9)))		
                return false;		
        // Valida 2o digito	
        add = 0;	
        for (i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }
