const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let valor1 = Number(document.getElementById("valor1").value);
  let valor2 = Number(document.getElementById("valor2").value);
  let numerosImpares = [];

  for (let i = Math.min(valor1, valor2); i <= Math.max(valor1, valor2); i++) {
    if (i % 2 !== 0) {
      numerosImpares.push(i);
    }
  }

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent= "Números ímpares: " + numerosImpares.join(", ");
}
formDados.addEventListener("submit", converter);