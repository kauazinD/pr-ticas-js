const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let valorHora = Number(document.getElementById("valorHora").value);
  let quantidadeHoras = Number(document.getElementById("quantidadeHoras").value);
  let salario = valorHora * quantidadeHoras;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent= "Salário: " + salario.toFixed(2);
}
formDados.addEventListener("submit", converter);