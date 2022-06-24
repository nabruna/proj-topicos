$(document).ready(function () {
  $("#btnVoltar").click(function () {
    window.location.replace("../index.html");
  });
});

const id = new URLSearchParams(window.location.search).get("id");

const renderDisciplinas = async () => {
  var form = $("#form");
  form.hide();

  const res = await fetch("http://localhost:3000/materias/" + id);
  const materias = await res.json();
  var content = "";

  content += `
  <h1>${materias.materia}</h1>
  <ul class="list-group">
  `;
  materias.alunos.forEach((aluno) => {
    content += `<li class="list-group-item">` + aluno + `</li>`;
  });
  content += "</ul>";

  $("#main").html(content);

  $("#addAlunos").click(function () {
    $("#form").toggle();
  });

  var options;
  options += `
  <option selected>Selecionar aluno</option>`;

  $.getJSON("../../shared/mockAlunos.json", function (data) {
    $.each(data.alunos, function (i, aluno) {
      options += `
      <option value="${aluno.nome}">${aluno.nome}</option>`
    });

  $("#selectAlunos").html(options);
  });

};


window.addEventListener("DOMContentLoaded", () => renderDisciplinas());
