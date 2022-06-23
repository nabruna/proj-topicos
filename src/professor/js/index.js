window.onload = () => {
  var main = document.getElementsByTagName("main")[0];
  var btnAlunos = document.getElementById("btnAlunos");
  var btnFrequencia = document.getElementById("btnFrequencia");

  function gerarTabela(url) {
    main.innerHTML = "<h1 class='my-2 fw-bold'>Alunos</h1>";

    fetch(url)
      .then((resposta) => {
        return resposta.json();
      })
      .then((alunos) => {
        listaDealunos = alunos;

        //Código de geração da tabela
        var table = document.createElement("table");
        table.classList.add("table");

        var thead = document.createElement("thead");
        thead.innerHTML =
          "<tr><th>Nome</th><th>Turma</th><th>Matérias</th><th>Atividades extras</th><th>Responsável</th></tr>";
        table.appendChild(thead);

        var tbody = document.createElement("tbody");

        var linhasTabela = alunos.length;

        for (var i = 0; i < linhasTabela; i++) {
          var tr = document.createElement("tr");
          var aluno = alunos[i];

          //Mostrar nome do aluno
          var td = document.createElement("td");
          var txt = document.createTextNode(aluno.nome);
          td.appendChild(txt);
          tr.appendChild(td);

          //Mostrar turma
          var td = document.createElement("td");
          var txt = document.createTextNode(aluno.turma);
          td.appendChild(txt);
          tr.appendChild(td);

          //Mostrar lista de matérias
          var td = document.createElement("td");
          const listaMaterias = document.createElement("ul");
          listaMaterias.classList.add("list-group");
          for (let i = 0; i < aluno.materias.length; i++) {
            const itemMateria = document.createElement("li");
            itemMateria.classList.add("list-group-item");
            var txt = document.createTextNode(aluno.materias[i].nomeMateria);
            itemMateria.appendChild(txt);
            listaMaterias.appendChild(itemMateria);
            td.appendChild(listaMaterias);
            tr.appendChild(td);
          }

          //Mostrar lista de atividades extras
          var td = document.createElement("td");
          const listaAtividades = document.createElement("ul");
          listaAtividades.classList.add("list-group");
          for (let i = 0; i < aluno.atividades.length; i++) {
            const itemAtividade = document.createElement("li");
            itemAtividade.classList.add("list-group-item");
            var txt = document.createTextNode(
              aluno.atividades[i].nomeAtividade
            );
            itemAtividade.appendChild(txt);
            listaAtividades.appendChild(itemAtividade);
            td.appendChild(listaAtividades);
            tr.appendChild(td);
          }

          //Mostrar responsável
          var td = document.createElement("td");
          var txt = document.createTextNode(aluno.responsavel);
          td.appendChild(txt);
          tr.appendChild(td);

          tr.appendChild(td);
          tbody.appendChild(tr);
        }

        table.appendChild(tbody);

        main.appendChild(table);
      });
  }

  btnAlunos.onclick = () => {
    main.innerHTML = "";
    gerarTabela("http://localhost:3000/alunos");
  };

  function gerarFreq(url) {
    main.innerHTML = "<h1 class='my-2 fw-bold'>Frequência</h1>";

    fetch(url)
      .then((resposta) => {
        return resposta.json();
      })
      .then((alunos) => {
        listaDealunos = alunos;

        //Código de geração da tabela
        var table = document.createElement("table");
        table.classList.add("table");

        var thead = document.createElement("thead");
        thead.innerHTML =
          "<tr><th>Nome</th><th>Faltas</th></tr>";
        table.appendChild(thead);

        var tbody = document.createElement("tbody");

        var linhasTabela = alunos.length;

        for (var i = 0; i < linhasTabela; i++) {
            var tr = document.createElement("tr");
            var aluno = alunos[i];
  
            //Mostrar nome do aluno
            var td = document.createElement("td");
            var txt = document.createTextNode(aluno.nome);
            td.appendChild(txt);
            tr.appendChild(td);
  
            //Mostrar lista de matérias
            var td = document.createElement("td");
            const listaMaterias = document.createElement("ul");
            listaMaterias.classList.add("list-group");
            for (let i = 0; i < aluno.materias.length; i++) {
              const itemMateria = document.createElement("li");
              itemMateria.classList.add("list-group-item");
              var txt = document.createTextNode(aluno.materias[i].nomeMateria);
              itemMateria.appendChild(txt);
              var sp = document.createTextNode(": ");
              itemMateria.appendChild(sp);
              var num = document.createTextNode(aluno.materias[i].faltas);
              itemMateria.appendChild(num);
              listaMaterias.appendChild(itemMateria);
              td.appendChild(listaMaterias);
              tr.appendChild(td);
            }
  
            tr.appendChild(td);
            tbody.appendChild(tr);
          }

        table.appendChild(tbody);

        main.appendChild(table);
      });
  }

  btnFrequencia.onclick = () => {
    main.innerHTML = "";
    gerarFreq("http://localhost:3000/alunos");
  };
  
};
