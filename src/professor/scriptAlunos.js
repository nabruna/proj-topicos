$(document).ready(function () {
  $.getJSON("../shared/mockAlunos.json", function (obj) {
    var tabela = "";
    $.each(obj.alunos, function (i, value) {
      tabela += '<tr><td>' + value.nome + '</td>';
      tabela += '<td><ul class="list-group">';
      $.each(value.materias, function (k, v) {
          tabela += '<li class="list-group-item">' + v.nomeMateria + '</li>';
      });
      tabela += '</ul></td>';
      tabela += '<td><ul class="list-group">';
      $.each(value.atividades, function (k, v) {
          tabela += '<li class="list-group-item">' + v.nomeAtividade + '</li>';
      });
      tabela += '</ul></td>';

      tabela += '<td>' + value.responsavel + '</td></tr>';
    });
    $("#dadosAlunos").append(tabela);
  });
});