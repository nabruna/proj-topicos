$(document).ready(function () {
    $.getJSON("../shared/mockVidaEscolarr.json", function (data) {
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
         
      });
      $("#notaAlunos").append(relatorios);
    });
  });

  $(document).ready(function () {
    $.getJSON("../shared/mockVidaEscolarr.json", function (data) {
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
         
      });
      $("#provaAlunos").append(relatorios);
    });
  });