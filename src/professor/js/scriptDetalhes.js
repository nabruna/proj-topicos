$(document).ready(function () {
  $("#btnVoltar").click(function () {
    window.location.replace("../index.html");
  });
});

const id = new URLSearchParams(window.location.search).get("id");

const renderDisciplinas = async () => {
  var form = $("#form");
  form.hide();

  const res = await fetch("http://localhost:3000/alunos/" + id);
  const alunos = await res.json();
  var content = "";

  content += `
  <div class="card">
  <h3 class="card-header">${alunos.nome}</h3>
  <div class="card-body">
    <h5><strong>Responsável:</strong></h5>
    <p>${alunos.responsavel}</p>
    <h5><strong>Turma:</strong></h5>
    <p>${alunos.turma}</p>
    <h5><strong>Matérias:</strong></h5>`
    
    for (let index = 0; index < alunos.materias.length; index++) {
        content +=`<p>${alunos.materias[index].nomeMateria}</p>`;
        
    }

    content +=`
    <h5><strong>Atividades:</strong></h5>`
    
    for (let index = 0; index < alunos.atividades.length; index++) {
        content +=`<p>${alunos.atividades[index].nomeAtividade}</p>`;
        
    }

    content +=`
  </div>
</div>`
    ;

  $("#main").html(content);
};

window.addEventListener("DOMContentLoaded", () => renderDisciplinas());
