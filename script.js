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

    