$(document).ready(function () {
  $.getJSON("../shared/mockAlunos.json", function (data) {
    var falta = "";
    $.each(data.alunos, function (i, value) {
        falta += "<tr><td>" + value.nome + "</td>"
        falta += "<td>" + value.materias[1].faltas + "</td></tr>"
        console.log(value.materias[1].faltas);
    });
    $("#faltasAlunos").append(falta);
  });
});
