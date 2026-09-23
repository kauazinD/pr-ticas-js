const formDados = document.getElementById("formDados");

function quadrado(evento) {
  evento.preventDefault();

  let valor = Number(document.getElementById("valor").value);
  let valorQuadrado = valor*valor;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent= "Número ao Quadrado: " + valorQuadrado;
}
formDados.addEventListener("submit", quadrado);