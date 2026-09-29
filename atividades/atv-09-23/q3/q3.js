const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let valor = Number(document.getElementById("polegadas").value);
  let valorCentimetros = valor * 2.54;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent= "Valor em centímetros: " + valorCentimetros;
}
formDados.addEventListener("submit", converter);