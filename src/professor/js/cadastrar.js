const renderPage = async () => {
  const form = document.querySelector("form");

  const cadastrarAluno = async (e) => {
    e.preventDefault();

    const aluno = {
      nome: form.nome.value,
      responsavel: form.responsavel.value,
      turma: form.turma.value,
      materias: [],
      atividades: [],
    };

    await fetch("http://localhost:3000/alunos", {
      method: "POST",
      body: JSON.stringify(aluno),
      headers: { "Content-Type": "application/json" },
    });

    window.location.replace("/src/professor/index.html");
  };

  form.addEventListener("submit", cadastrarAluno);
};

window.addEventListener("DOMContentLoaded", () => renderPage());
