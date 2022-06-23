const renderPage = async () => {
  let url = "http://localhost:3000/alunos";

  const res = await fetch(url);
  const alunos = await res.json();

  var main = document.getElementsByTagName("main")[0];
  var btnAlunos = document.getElementById("btnAlunos");
  var btnFrequencia = document.getElementById("btnFrequencia");
  var btnNotas = document.getElementById("btnNotas");

  function gerarTabela(url) {
    var template = "";
    var titulo = "<h1 class='my-2 fw-bold'>Alunos</h1>";

    alunos.forEach((aluno) => {
      template += `
      <tr>
       <td>
        ${aluno.nome}
      </td>
      <td>
      ${aluno.turma}
      </td>
      <td>`;

      if (aluno.materias.length == 0) {
        var button = `<a href="/src/professor/cadastrar_materia.html?id=${aluno.id}">Adicionar materias</a>`;
        template += button;
      } else {
        for (let i = 0; i < aluno.materias.length; i++) {
          let itemMateria = "";
          itemMateria += `<li class="list-group-item">${aluno.materias[i].nomeMateria}</li>`;
          template += itemMateria;
        }
      }

      template += `
      </td>
      <td>`;

      if (aluno.atividades.length == 0) {
        var button = `<a href="/src/professor/cadastrar_atividade.html?id=${aluno.id}">Adicionar atividades</a>`;
        template += button;
      } else {
        for (let i = 0; i < aluno.atividades.length; i++) {
          let itemMateria = "";
          itemMateria += `<li class="list-group-item">${aluno.atividades[i].nomeAtividade}</li>`;
          template += itemMateria;
        }
      }
      template += `
      </td>
      <td>
      ${aluno.responsavel}
      </td>`;
      template += `
      </td>
      </tr>`;
    });

    var tabela =
      `
    <table class="table">
    <thead>
    <tr><th>Nome</th><th>Turma</th><th>Matérias</th><th>Atividades extras</th><th>Responsável</th></tr>
    </thead>
    <tbody>` +
      template +
      `</tbody>
    </table>`;

    main.innerHTML = titulo + tabela;
  }

  btnAlunos.onclick = () => {
    gerarTabela("http://localhost:3000/alunos");
  };

  function gerarFreq(url) {
    var template = "";
    var titulo = "<h1 class='mb-2 fw-bold'>Frequência</h1>";

    alunos.forEach((aluno) => {
      var button = `<a class="btn btn-outline-primary" href="/src/professor/faltas.html?id=${aluno.id}">Adicionar ou remover faltas</a>`;
      template += `
      <tr>
       <td>
        ${aluno.nome}
      </td>
      <td>`;

      for (let i = 0; i < aluno.materias.length; i++) {
        let itemMateria = "";
        itemMateria += `<div class="row">${aluno.materias[i].nomeMateria}: ${aluno.materias[i].faltas}</div>`;
        template += itemMateria;
      }
      template += `
      </td>
      <td>`;
      template += button;
      template += `
      </td>
      </tr>`;
    });

    var tabela =
      `
    <table class="table">
    <thead>
    <tr><th>Nome</th><th>Faltas</th><th>Ações</th></tr>
    </thead>
    <tbody>` +
      template +
      `</tbody>
    </table>`;

    main.innerHTML = titulo + tabela;
  }

  btnFrequencia.onclick = () => {
    gerarFreq("http://localhost:3000/alunos");
  };

  function gerarNotas(url) {
    var template = "";
    var thead = "";
    var titulo = "<h1 class='mb-2 fw-bold'>Notas</h1>";

    alunos.forEach((aluno) => {
      var button = `<a class="btn btn-outline-primary" href="/src/professor/notas.html?id=${aluno.id}">Alterar notas</a>`;
      var card = "";

      template += `
      <tr>
       <td>
        ${aluno.nome}
      </td>
      <td>
      <div class="card-group">`;

      for (let i = 0; i < aluno.materias.length; i++) {
        card += `<div class="card mb-2" style="width: 18rem;">
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

      template += card;

      template += `
      </td>
      <td>`;
      template += button;
      template += `
      </td>
      </tr>`;
    });

    var tabela =
      `
    <table class="table">
    <thead>
    <tr><th>Nome</th><th>Notas</th></tr>
    </thead>
    <tbody>` +
      template +
      `</tbody>
    </table>`;

    main.innerHTML = titulo + tabela;
  }

  btnNotas.onclick = () => {
    gerarNotas("http://localhost:3000/alunos");
  };
};

window.addEventListener("DOMContentLoaded", () => renderPage());
