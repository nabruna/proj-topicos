const id = new URLSearchParams(window.location.search).get("id");

const renderMaterias = async () => {
  const form = document.querySelector("form");
  const res = await fetch("http://localhost:3000/alunos/" + id);
  const aluno = await res.json();

  const materias = document.getElementById("materias");
  const dadosAluno = document.getElementById("dadosAluno");

  var card = `
  <strong>Nome:</strong> ${aluno.nome}<br>
  <strong>Turma:</strong> ${aluno.turma}<br>
  <strong>Notas:</strong>
  <div class="card-group">`;

  for (let i = 0; i < aluno.materias.length; i++) {
    card += `<div class="card mb-2 w-25">
    <div class="card-header">${aluno.materias[i].nomeMateria}</div>
    <ul class="list-group list-group-flush">`;

    if (aluno.materias[i].notas.length == 0) {
      card += `<li class="list-group-item">N/A</li>`;
    } else {
      let itemMateria = "";
      itemMateria += `
      <li class="list-group-item"><strong>N1:</strong> ${aluno.materias[i].notas[0]}</li>
      <li class="list-group-item"><strong>N2:</strong> ${aluno.materias[i].notas[1]}</li>
      <li class="list-group-item"><strong>N3:</strong> ${aluno.materias[i].notas[2]}</li>
      <li class="list-group-item"><strong>N4:</strong> ${aluno.materias[i].notas[3]}</li>`;
      card += itemMateria;

      card += "</ul></div>";
    }
  }
  card += "</div>"

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
          notas: [
            form.nota1.value,
            form.nota2.value,
            form.nota4.value,
            form.nota3.value,
          ],
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
