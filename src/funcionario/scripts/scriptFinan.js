$(document).ready(function () {
    $.getJSON("../shared/mockVidaEscolarr.json", function (obj) {
      var tabela = "";
      $.each(obj.alunos, function (i, value) {

        tabela += "<tr></tr>" + value.nome+"</td>"

        tabela += '<td>' + value.nome +'<td>'+ value.matricula +'<td>' + value.mensal;    
  
      });
      $("#finan").append(tabela);
    });
  }); 
