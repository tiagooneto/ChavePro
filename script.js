const entrada1 = document.querySelector('#nome');
const entrada2 = document.querySelector('#email');
const entrada3 = document.querySelector('#texto');

document.querySelector("#botao").addEventListener("click", function() {
    if (entrada1.value !== "" && entrada2.value !== "" && entrada3.value !== "") {
        alert( 'Informações preenchidas: ' + '\n' +  'Nome: ' + entrada1.value + '\n' + 'E-mail: ' + entrada2.value + '\n' + 'Mensagem: ' + entrada3.value + '\n' + "Sua mensagem foi enviada");
    } else {
        alert('Por favor, preencha todos os campos.');
    }
})

const menu = document.querySelector('.material-symbols-outlined')
const navegacao = document.querySelector('#navegacao-header')

menu.addEventListener('click',()=>{
   navegacao.classList.toggle('revelarNavegacao')

})
 const links = navegacao.querySelectorAll('a')

links.forEach(link =>{
    link.addEventListener('click', () =>{
        navegacao.classList.toggle('revelarNavegacao');
    })




})





