$(document).ready(function () {
  $.getJSON("../shared/mockAlunos.json", function (obj) {
    var tabela = "";
    $.each(obj.alunos, function () {
        var nome = this.nome;
        var matematica = this.materias[1];
      tabela += "<tr><td>" + nome + "</td>";
      tabela += '<td><ul class="list-group">';

      console.log();

      tabela += '<p id="numFaltas">' + matematica.faltas + "</p>";
      tabela += "</ul></td>";

      tabela +=
        "<td><button class='btn btn-outline-primary ms-2' onclick='adicionarFalta()'>+</button><button class='btn btn-outline-danger' onclick='removerFalta()'>-</button></td></tr>";
    });
    $("#freqAlunos").append(tabela);
  });
});
