$(document).ready(function () {
  $.getJSON("../shared/mockAlunos.json", function (data) {
    var aluno = "";
    $.each(data, function (key, value) {
      aluno += "<li class='list-group-item'>" + value[0].nome + "</li>";
      aluno += "<li class='list-group-item'>" + value[1].nome + "</li>";
    });
    $("#listaAlunos").append(aluno);
  });
});
