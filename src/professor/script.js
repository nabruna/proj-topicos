// Registrar faltas
var numFaltas = document.getElementById("numFaltas"); // identifica local onde número de faltas irá aparecer na DOM
var novaFalta = 0; // inicializa nova falta em 0

function adicionarFalta() {
  novaFalta++; // aumenta falta cada vez que a função é chamada
  numFaltas.innerHTML = novaFalta; // atualiza DOM com o novo valor
}

function removerFalta() {
  if (novaFalta > 0) {
    novaFalta--; // remove uma falta toda vez que a função é chamada
    numFaltas.innerHTML = novaFalta; // atualiza DOM
  } else {
    numFaltas.innerHTML = 0; // impede que o valor fique negativo
  }
}

// Registrar notas

function registrarNotas() {
  var n1 = document.getElementById("n1Input").value; // identifica radio buttons
  var n2 = document.getElementById("n2Input").value;
  var n3 = document.getElementById("n3Input").value;
  var n4 = document.getElementById("n4Input").value;

  document.getElementById("n1").innerHTML = n1; // identifica o local de atualização das notas na DOM
  document.getElementById("n2").innerHTML = n2;
  document.getElementById("n3").innerHTML = n3;
  document.getElementById("n4").innerHTML = n4;

  var media =
    (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4; // calcula a média
  document.getElementById("media").innerHTML = media; // atualiza DOM com média
}
