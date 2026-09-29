const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let valor = Number(document.getElementById("raio").value);
  let valorPerimetro = 2 * Math.PI * valor;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent= "Perímetro do círculo: " + valorPerimetro.toFixed(2);
}
formDados.addEventListener("submit", converter);