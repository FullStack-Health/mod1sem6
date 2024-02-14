
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


let inputData = document.createElement("input");
inputData.type = "date";
document.body.appendChild(inputData);

let listaDeAfazeres = document.querySelector("#todolist");
let listItemPersistente = document.querySelector("#itemPersistente");

let itensTodo = document.getElementsByClassName("todoItem");
let ultimoItemTodo = itensTodo[0];

let listItemNovo = document.createElement("li");
listItemNovo.id = "listItemNovo";
listItemNovo.className = "todoItem";
listItemNovo.innerHTML = "<input type='checkbox'><span>Item Novo</span><button>X</button>";

listaDeAfazeres.insertBefore(listItemNovo, listItemPersistente);

document.body.appendChild(btnColor);

let novoBotao = btnColor.cloneNode(true);

document.body.appendChild(novoBotao);