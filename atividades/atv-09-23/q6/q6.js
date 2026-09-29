const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let notaFinal = (n1 + n2) / 2;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent= "Nota final: " + notaFinal.toFixed(2);
}
formDados.addEventListener("submit", converter);