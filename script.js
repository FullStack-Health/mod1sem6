
document.body.style.background = "limegreen";
document.getElementById("cabecalho1").innerHTML += "To Do List";

let btnEnviar = document.getElementById("btnEviar");
btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.classList.add("botao", "btn");

let cabecalhos = document.getElementsByClassName("cabecalho");
cabecalhos = document.querySelectorAll(".cabecalho");

for (let i = 0; i < cabecalhos.length; i++) {
    cabecalhos[i].style.fontSize = "40px";
}    

let btnColor = document.querySelector("#btnColor");

function trocaCorFundo(cor) {
    document.body.style.background = cor;
}

btnColor.addEventListener("click", function() {
    trocaCorFundo("#f0f0f0");
});

btnColor.addEventListener("click", trocaCorParagrafos);

function trocaCorParagrafos() {
    let paragrafos = document.querySelectorAll("p");
    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.color = "lightblue";
    }
}


btnColor.removeEventListener("click", trocaCorParagrafos);
