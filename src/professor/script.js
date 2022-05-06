// Registrar faltas
var numFaltas = document.getElementById("numFaltas");
var novaFalta = 0;

function adicionarFalta() {
  novaFalta++;
  numFaltas.innerHTML = novaFalta;
}

function removerFalta() {
  if (novaFalta > 0) {
    novaFalta--;
    numFaltas.innerHTML = novaFalta;
  } else {
    numFaltas.innerHTML = 0;
  }
}

// Registrar notas

function registrarNotas() {
  var n1 = document.getElementById("n1Input").value;
  var n2 = document.getElementById("n2Input").value;
  var n3 = document.getElementById("n3Input").value;
  var n4 = document.getElementById("n4Input").value;

  document.getElementById("n1").innerHTML = n1;
  document.getElementById("n2").innerHTML = n2;
  document.getElementById("n3").innerHTML = n3;
  document.getElementById("n4").innerHTML = n4;

  var media =
    (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
  document.getElementById("media").innerHTML = media;
}
