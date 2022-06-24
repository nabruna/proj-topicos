$(document).ready(function () {
  $("#test").hide()

  $.getJSON("../shared/mockAlunos.json", function (data) {
    var relatorios = "";
    $.each(data.alunos, function (i, value) {
        relatorios += "<tr><td>" + value.nome + "</td>"

        var matematica = value.materias[1];

        relatorios += "<td>" + matematica.faltas + "</td>"
        relatorios += "<td>" + matematica.notas[0] + "</td>"
        relatorios += "<td>" + matematica.notas[1] + "</td>"
        relatorios += "<td>" + matematica.notas[2] + "</td>"
        relatorios += "<td>" + matematica.notas[3] + "</td>"

        media = (matematica.notas[0] + matematica.notas[1] + matematica.notas[2] + matematica.notas[3]) / 4;

        relatorios += "<td>" + media.toFixed(1) + "</td>"
        
        if (media < 4) {
          aprovacao = "<span class='text-danger fw-bold'>Reprovado</span>";
        } else if  (media < 7) {
          aprovacao = "<span class='text-warning fw-bold'>Em recuperação</span>";
        } else {
          aprovacao = "<span class='text-success fw-bold'>Aprovado</span>";
        }

        relatorios += "<td>" + aprovacao + "</td></tr>"
    });
    $("#faltasAlunos").append(relatorios);
  });
});
