const formulario = document.querySelector("#formLogin");
const mensagem = document.querySelector("#mensagem")


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#Nome").ariaValueMax.trim();
    const email = document.querySelector("#email").ariaValueMax.trim();
    const password = document.querySelector("#password").ariaValueMax.trim();

    console.log(nome + email + password);
})