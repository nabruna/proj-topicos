const id = new URLSearchParams(window.location.search).get("id");

const renderMaterias = async () => {
  const form = document.querySelector("form");
  const res = await fetch("http://localhost:3000/alunos/" + id);
  const aluno = await res.json();

  const dadosAluno = document.getElementById("dadosAluno");

  var template = `
    <strong>Nome:</strong> ${aluno.nome}<br>
    <strong>Turma:</strong> ${aluno.turma}<br>
    <strong>Matérias cadastradas:</strong>`;
  if (aluno.materias.length == 0) {
    template += "N/A";
  } else {
    for (let i = 0; i < aluno.materias.length; i++) {
      let itemMateria = "";
      itemMateria += `${aluno.materias[i].nomeMateria}<br>`;
      template += itemMateria;
    }
  }

  dadosAluno.innerHTML = template;

  const cadastrarMateria = async (e) => {
    e.preventDefault();

    var materia = {
      materias: [
        {
          nomeMateria: form.nomeMateria.value,
          notas: [],
          faltas: 0,
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
