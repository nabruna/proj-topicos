$(document).ready(function () {
    $.getJSON("../shared/mockVidaEscolarr.json", function (obj) {
      var tabela = "";
      $.each(obj.alunos, function (i, value) {

        tabela += '<td><ul class="list-group">';
        
        
        $.each(value.atividadesGeo, function (k, v) {
            tabela += '<li class="list-group-item">' + v.nomeAtividade + '</li>';
        });
        tabela += '</ul></td>';
  
      });
      $("#contGeo").append(tabela);
    });
  }); 
