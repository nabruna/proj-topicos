$(document).ready(function () {
  $.getJSON("../shared/mockAlunos.json", function (data) {
    var aluno = "";
    $.each(data.alunos, function (i, value) {
      aluno += "<li class='list-group-item'>" + value.nome + "</li>";
    });
    $("#listaAlunos").append(aluno);
  });
});
