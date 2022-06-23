const id = new URLSearchParams(window.location.search).get("id");

const renderMaterias = async () => {
  const form = document.querySelector("form");
  const res = await fetch("http://localhost:3000/alunos/" + id);
  const aluno = await res.json();

  const dadosAluno = document.getElementById("dadosAluno");
  const materias = document.getElementById("materias");

  var card = `
    <strong>Nome:</strong> ${aluno.nome}<br>
    <strong>Turma:</strong> ${aluno.turma}<br>
    <strong>Matérias e faltas:</strong>`;

  if (aluno.materias.length == 0) {
    card += "N/A";
  } else {
    for (let i = 0; i < aluno.materias.length; i++) {
      let itemMateria = "";
      if (aluno.materias[i].faltas == undefined || aluno.materias[i].faltas == null) {
        itemMateria += `${aluno.materias[i].nomeMateria}: 0<br>`;
      } else {
        itemMateria += `${aluno.materias[i].nomeMateria}: ${aluno.materias[i].faltas}<br>`;
      }
      card += itemMateria;
    }
  }

  dadosAluno.innerHTML = card;


  var options = `
  <option selected>Selecionar matéria</option>`;

  template = "";
  if (aluno.materias.length == 0) {
    template += "<option>N/A</option>";
  } else {
    for (let i = 0; i < aluno.materias.length; i++) {
      let itemMateria = "";
      itemMateria += `<option value="${aluno.materias[i].nomeMateria}">${aluno.materias[i].nomeMateria}</option>`;
      template += itemMateria;
    }
  }

  options += template;

  materias.innerHTML = options;

  const cadastrarMateria = async (e) => {
    e.preventDefault();

    var materia = {
      materias: [
        {
          nomeMateria: form.nomeMateria.value,
          faltas: form.qtdeFaltas.value,
        },
      ],
    };

    await fetch("http://localhost:3000/alunos/" + id, {
      method: "PATCH",
      body: JSON.stringify(materia),
      headers: { "Content-Type": "application/json" },
    });
  };

  form.addEventListener("submit", cadastrarMateria);
};

window.addEventListener("DOMContentLoaded", () => renderMaterias());
