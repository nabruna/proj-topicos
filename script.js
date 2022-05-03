function create() {
        const button= document.querySelectorAll('#');
        for(var y= 0; y < button.length ; y++) {//alterado indice de i para X
        button[y].addEventListener('click', create);
    }
}

function alertaFucn() {
    alert("Tem certeza? Não é possivel desfazer a matricula!");
}
    