const formDados=document.getElementById(formDados);

let nome=document.getElementById("nome").value;
let idade=document.getElementById("idade").value;

const pnome=document.getElementById("nomeusuario") // pega um elemento pelo id
pnome.textContent="O nome do usuário é: " + nome;
const pidade=document.getElementById("idadeusuario") // pega um elemento pelo id
pidade.textContent="A idade do usuário é: " + idade;

function atualizarDados(evento) {
    evento.preventDefault();
}

formDados.addEventListener("submit",);

console.log("O nome do usuário é: " + nome);
console.log("A idade do usuário é: " + idade);