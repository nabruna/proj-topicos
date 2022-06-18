window.onload = () => {
  var main = document.getElementsByTagName("main")[0];
  var btnAlunos = document.getElementById("btnAlunos");
  var btnAtividades = document.getElementById("btnAtividades");
  var btnAPI = document.getElementById("btnAPI");
  var btnImagem = document.getElementById("btnImagem");
  var listaAtividades;

  function criarLista(atividades) {
    main.innerHTML = "<h1>Atividades</h1>";

    const lista = document.createElement("ul");
    for (const atividade of atividades) {
      for (var i = 0; i < atividades.length; i++) {
        var card = document.createElement("div");
        card.classList.add("card", "my-2");

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        var cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardBody.appendChild(cardTitle);

        var nomeAtividade = document.createTextNode(atividade.nome);
        cardTitle.appendChild(nomeAtividade);
        
        var cardText = document.createElement("p");
        cardText.classList.add("card-text");
        var diaAtividade = document.createTextNode(atividade.dia);
        cardText.appendChild(diaAtividade);
        cardBody.appendChild(cardText);

        var listaDetalhes = document.createElement("ul");
        listaDetalhes.classList.add("list-group", "list-group-flush");

        // Mostrar horário
        item1 = document.createElement("li")
        item1.classList.add("list-group-item");
        horarioAtividade = document.createTextNode(atividade.horario);

        item1.appendChild(horarioAtividade)

        item2 = document.createElement("li")
        item2.classList.add("list-group-item");
        localAtividade = document.createTextNode(atividade.local);
        
        item2.appendChild(localAtividade)

        item3 = document.createElement("li")
        item3.classList.add("list-group-item");
        valorAtividade = document.createTextNode(atividade.valor);
        item3.innerHTML = "R$";
        item3.appendChild(valorAtividade);

        listaDetalhes.appendChild(item1);
        listaDetalhes.appendChild(item2);
        listaDetalhes.appendChild(item3);

        card.appendChild(listaDetalhes);
      }
      
      main.appendChild(card);
    //   const item = document.createElement("li");
    //   item.innerText = atividade.nome;
    //   lista.appendChild(item);
    }
    main.appendChild(lista);
  }

  function gerarLista(url) {
    fetch(url)
      .then((resposta) => {
        return resposta.json();
      })
      .then((json) => {
        criarLista(json);
      });
  }

  function enviar(aluno, url, method, json) {
    fetch(url, {
      method: method,
      body: JSON.stringify(json),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      gerarTabela("http://localhost:3000/alunos");
    });
  }

  function carregarHtml(url, elemento, aluno) {
    fetch(url)
      .then((resposta) => {
        return resposta.text();
      })
      .then((html) => {
        elemento.innerHTML = html;
      })
      .then(() => {
        var txtNome = document.getElementById("nome");
        var txtTurma = document.getElementById("turma");

        if (aluno != null) {
          txtNome.value = aluno.nome;
          txtTurma.value = aluno.turma;
        }

        var btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.onclick = () => {
          var txtNome = document.getElementById("nome");
          var txtTurma = document.getElementById("turma");
          var nomeForm = txtNome.value;
          var turmaForm = txtTurma.value;

          var json = {
            nome: nomeForm,
            turma: turmaForm,
          };

          var url = "http://localhost:3000/alunos";

          if (aluno != null) {
            enviar(aluno, url + "/" + aluno.id, "PUT", json);
          } else {
            enviar(aluno, url, "POST", json);
          }
        };

        var btnVoltar = document.getElementById("btnVoltar");
        btnVoltar.onclick = () => {
          gerarTabela("http://localhost:3000/alunos");
        };
      });
  }

  function configurarForm(aluno) {
    carregarHtml("html/form.html", main, aluno);
  }

  var listaDealunos;

  function gerarTabela(url) {
    main.innerHTML = "<h1>Alunos</h1>";

    // var btnIncluir = document.createElement("button");
    // btnIncluir.innerText = "Incluir";
    // btnIncluir.onclick = () => {
    //   configurarForm();
    // };

    // main.appendChild(btnIncluir);

    //Incluir título: Alunos

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

          //   for (const materia of materias) {
          //     const item = document.createElement("li");
          //     item.innerText = aluno.materias.nomeMateria;
          //     lista.appendChild(item);
          //   }

          //Link editar
          //   var linkEditar = document.createElement("a");
          //   linkEditar.href = "#" + aluno.id;
          //   linkEditar.setAttribute("id", aluno.id);
          //   var txt = document.createTextNode("Editar");
          //   linkEditar.appendChild(txt);
          //   linkEditar.onclick = (event) => {
          //     var id = event.target.id;
          //     var aluno = listaDealunos.find((aluno) => aluno.id == id);
          //     configurarForm(aluno);
          //   };
          //   td.appendChild(linkEditar);

          //Link excluir
          //   var linkExcluir = document.createElement("a");
          //   linkExcluir.href = "#" + aluno.id;
          //   linkExcluir.setAttribute("id", aluno.id);
          //   var txt = document.createTextNode("Excluir");
          //   linkExcluir.appendChild(txt);
          //   linkExcluir.onclick = (event) => {
          //     if (confirm("Tem certeza que deseja excluir o aluno?")) {
          //       fetch("http://localhost:3000/alunos/" + event.target.id, {
          //         method: "DELETE",
          //       }).then(() => {
          //         gerarTabela("http://localhost:3000/alunos");
          //       });
          //     }
          //   };
          //   td.appendChild(linkExcluir);

          tr.appendChild(td);
          tbody.appendChild(tr);
        }

        table.appendChild(tbody);

        main.appendChild(table);
      });
  }

  function carregarImagem(url) {
    fetch(url)
      .then((resposta) => {
        return resposta.blob();
      })
      .then((imgCarregada) => {
        var imgElemento = document.createElement("img");
        imgElemento.src = URL.createObjectURL(imgCarregada);
        main.appendChild(imgElemento);
      });
  }

  btnAlunos.onclick = () => {
    main.innerHTML = "";
    gerarTabela("http://localhost:3000/alunos");
  };

  btnAtividades.onclick = () => {
    main.innerHTML = "";
    gerarLista("http://localhost:3000/atividades");
  };

  //   btnImagem.onclick = () => {
  //     main.innerHTML = "";
  //     carregarImagem("imgs/carne1.jpg");
  //   };

  //   btnAPI.onclick = () => {
  //     main.innerHTML = "";
  //     gerarLista("http://localhost:3000/alunos");
  //   };

  //   var main = document.getElementsByTagName("main")[0];
  //   var listaAlunos;
  //   var btnAlunos = document.getElementById("btnAlunos");
  //   var btnAtividades = document.getElementById("btnAtividades");
  //   var btnMateriais = document.getElementById("btnMateriais");
  //   var btnFrequencia = document.getElementById("btnFrequencia");
  //   var btnNotas = document.getElementById("btnNotas");

  //   btnAlunos.onclick = () => {
  //     main.innerHTML = "";
  //     criarAlunos("../../shared/mockAlunos.json");
  //   };

  //   function gerarAlunos(url) {
  //     fetch(url)
  //       .then((resposta) => {
  //         return resposta.json();
  //       })
  //       .then((json) => {
  //         criarAlunos(json);
  //       });
  //   }

  //   function criarAlunos(alunos) {
  //     const lista = document.createElement("ul");
  //     for (const aluno of alunos) {
  //         const item = document.createElement('li');
  //         item.innerText = aluno.nome;
  //         lista.appendChild(item);
  //     }
  //     main.appendChild(lista);
  //   }
};
