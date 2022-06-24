$(document).ready(function () {
  $("#btnRelatorios").click(function () {
    $.getJSON("../shared/mockAlunos.json", function (data) {
      var relatorios = "";
      var header = "";
      header += `
      <h1>Notas</h1>`;
      relatorios += `
      <table class="table">
      <thead>
      <th>Nome</th>
      <th>Faltas</th>
      <th>Nota 1</th>
      <th>Nota 2</th>
      <th>Nota 3</th>
      <th>Nota 4</th>
      <th>Média</th>
      <th>Status</th>      
      </thead>
      <tbody>`;
      $.each(data.alunos, function (i, aluno) {
        const matematica = aluno.materias[1];
        var aprovacao = "";

        media =
          (matematica.notas[0] +
            matematica.notas[1] +
            matematica.notas[2] +
            matematica.notas[3]) /
          4;

        if (media < 4) {
          aprovacao = "<span class='text-danger fw-bold'>Reprovado</span>";
        } else if (media < 7) {
          aprovacao =
            "<span class='text-warning fw-bold'>Em recuperação</span>";
        } else {
          aprovacao = "<span class='text-success fw-bold'>Aprovado</span>";
        }

        relatorios += `
        <tr>
        <td>${aluno.nome}</td>
        <td>${matematica.faltas}</td>
        <td>${matematica.notas[0]}</td>
        <td>${matematica.notas[1]}</td>
        <td>${matematica.notas[2]}</td>
        <td>${matematica.notas[3]}</td>
        <td>${media.toFixed(1)}</td>
        <td>${aprovacao}</td>`;
      });
      relatorios += `
      </tbody>
      </table>`;
      content = header + relatorios;
      $("#main").html(content);
    });
  });

  $("#btnDisciplinas").click(function () {
    $.getJSON("../shared/mockMaterias.json", function (data) {
      var disciplinas = "";
      var header = "";
      header += `
      <h1>Disciplinas</h1>`;
      disciplinas += `
      <table class="table">
      <thead>
      <th>Disciplina</th>
      <th>Professor</th>
      <th>Lista de alunos</th>      
      </thead>
      <tbody>`;

      $.each(data.materias, function (i, materia) {
        disciplinas += `
        <tr>
        <td>${materia.materia}</td>
        <td>${materia.professor}</td>
        <td><a href="../professor/html/listaAlunos.html?id=${materia.id}">Gerar lista</a></td>
        </tr>
        `;
      });
      disciplinas += `
      </tbody>
      </table>`;
      content = header + disciplinas;
      $("#main").html(content);
    });
  });

  $("#btnAtividades").click(function () {
    $.getJSON("../shared/mockAtividades.json", function (data) {
      var atividades = "";
      var header = "";
      header += `
      <h1>Atividades extras</h1>`;
      atividades += `
      <table class="table">
      <thead>
      <th>Atividade</th>
      <th>Dia</th>
      <th>Horário</th>
      <th>Local</th>
      <th>Valor</th>      
      </thead>
      <tbody>`;

      $.each(data.atividades, function (i, atividade) {
        atividades += `
        <tr>
        <td>${atividade.nome}</td>
        <td>${atividade.dia}</td>
        <td>${atividade.horario}</td>
        <td>${atividade.local}</td>
        <td>${atividade.valor}</td>
        </tr>
        `;
      });
      atividades += `
      </tbody>
      </table>`;
      content = header + atividades;
      $("#main").html(content);
    });
  });

  $("#btnListaAlunos").click(function () {
    $.getJSON("../shared/mockAlunos.json", function (data) {
      var listaAlunosCompleta = "";
      var header = "";
      header += `
      <h1>Lista de alunos</h1>`;
      listaAlunosCompleta += `
      <div class="list-group">`;

      $.each(data.alunos, function (i, aluno) {
        listaAlunosCompleta += `
        <a href="../professor/html/detalhes.html?id=${aluno.id}" class="list-group-item list-group-item-action">${aluno.nome}</a>
        `;
      });
      listaAlunosCompleta += `
      </div>`;
      content = header + listaAlunosCompleta;
      $("#main").html(content);
    });
  });
});
