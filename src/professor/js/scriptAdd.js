$(document).ready(function () {
  $("#btnVoltar").click(function () {
    window.location.replace("../index.html");
  });
});

const id = new URLSearchParams(window.location.search).get("id");

const renderDisciplinas = async () => {
  const res = await fetch("http://localhost:3000/materias/" + id);
  const materias = await res.json();
  console.log(materias);
  var content = "";

  content += `
  <h1>${materias.materia}</h1>
  <ul class="list-group">
  `;
  materias.alunos.forEach((aluno) => {
    content += `<li class="list-group-item">`+ aluno + `</li>`;
  });
  content += "</ul>"

  $("#main").html(content);
};

window.addEventListener("DOMContentLoaded", () => renderDisciplinas());
