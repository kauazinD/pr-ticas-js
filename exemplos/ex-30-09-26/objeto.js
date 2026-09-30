const carro = {
    marca: "Fiat",
    cor: "branco",
    modelo: "Toro",
    ano: 2015,
    velocidade:0,
    acelerar: function() {
        this.velocidade+=10
        console.log(this.velocidade)
    },
    buzinar: function () {
        console.log("estou buzinando...");
    }
}
carro.buzinar();
carro.acelerar();
console.table(carro)