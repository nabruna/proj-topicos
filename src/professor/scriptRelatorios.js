$.getJSON("../../mockRelatorios.json", function (data) {
  $.each(data.products, function (i, aluno) {
    content = "<li class='list-group-item'>" + aluno.nome + "</li>";
    $(content).appendTo("#product_list");
  });
});
