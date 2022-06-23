const id = new URLSearchParams(window.location.search).get("id");

const renderAtividades = async () => {
  const form = document.querySelector("form");
  const res = await fetch("http://localhost:3000/alunos/" + id);
  const aluno = await res.json();

  const dadosAluno = document.getElementById("dadosAluno");

  var template = `
    <strong>Nome:</strong> ${aluno.nome}<br>
    <strong>Turma:</strong> ${aluno.turma}<br>
    <strong>Atividades cadastradas:</strong>`;

  if (aluno.atividades.length == 0) {
    template += "N/A";
  } else {
    for (let i = 0; i < aluno.atividades.length; i++) {
      let itemAtividade = "";
      itemAtividade += `${aluno.atividades[i].nomeAtividade}<br>`;
      template += itemAtividade;
    }
  }

  dadosAluno.innerHTML = template;

  const cadastrarAtividade = async (e) => {
    e.preventDefault();

    var atividade = {
      atividades: [
        {
          nomeAtividade: form.nomeAtividade.value,
        },
      ],
    };

    await fetch("http://localhost:3000/alunos/" + id, {
      method: "PATCH",
      body: JSON.stringify(atividade),
      headers: { "Content-Type": "application/json" },
    });
  };

  form.addEventListener("submit", cadastrarAtividade);
};

window.addEventListener("DOMContentLoaded", () => renderAtividades());
