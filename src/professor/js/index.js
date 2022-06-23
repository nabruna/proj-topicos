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
    var titulo = "<h1 class='mb-2 fw-bold'>Notas</h1>";

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
        if (aluno.materias[i].notas == null || aluno.materias[i].notas == undefined) {
          itemMateria += "N/A"
        } else {
        itemMateria += `<div class="row"><strong>${aluno.materias[i].nomeMateria}</strong>
        <br>
        <p>N1: ${aluno.materias[i].notas[0]}</p>
        <p>N2: ${aluno.materias[i].notas[1]}</p>
        <p>N3: ${aluno.materias[i].notas[2]}</p>
        <p>N4: ${aluno.materias[i].notas[3]}</p>
        </div>`;
      }
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

  // btnNotas.onclick = () => {
  //   gerarNotas("http://localhost:3000/alunos");
  // };
};

window.addEventListener("DOMContentLoaded", () => renderPage());
