let form = document.querySelector("#formulario");
form.addEventListener("submit", function(event) {
    event.preventDefault();
})

let selectEstadoCivil = document.querySelector("#selectEstadoCivil");

selectEstadoCivil.addEventListener("change", validaEstadoCivil);

function validaEstadoCivil() {
    let inputNomeConjuge = document.querySelector("#nomeConjuge");
    if (selectEstadoCivil.value == "Casado(a)") {
        inputNomeConjuge.disabled = false;
        //inputNomeConjuge.removeAttribute("disabled");
    } else {
        //inputNomeConjuge.setAttribute("disabled", true);
        inputNomeConjuge.disabled = true;
    }
}

