const entrada1 = document.querySelector('#nome');
const entrada2 = document.querySelector('#email');
const entrada3 = document.querySelector('#texto');

document.querySelector("#botao").addEventListener("click", function() {
    if (entrada1.value !== "" && entrada2.value !== "" && entrada3.value !== "") {
        alert('Sua solicitação foi enviada');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
})
