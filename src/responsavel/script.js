
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
/*------chat--*/
var user = cookie.get('user');
if (!user) {

  // Ask for the username if there is none set already
  user = prompt('Choose a username:');
  if (!user) {
    alert('We cannot work with you like that!');
  } else {
    // Store it in the cookies for future use
    cookie.set('user', user);
  }
}

var socket = io();

// The user count. Can change when someone joins/leaves
socket.on('count', function (data) {
  $('.user-count').html(data);
});

// When we receive a message
// it will be like { user: 'username', message: 'text' }
socket.on('message', function (data) {
  $('.chat').append('<p><strong>' + data.user + '</strong>: ' + data.message + '</p>');
});

// When the form is submitted
$('form').submit(function (e) {
  // Avoid submitting it through HTTP
  e.preventDefault();

  // Retrieve the message from the user
  var message = $(e.target).find('input').val();

  // Send the message to the server
  socket.emit('message', {
    user: cookie.get('user') || 'Anonymous',
    message: message
  });

  // Clear the input and focus it for a new message
  e.target.reset();
  $(e.target).find('input').focus();
});