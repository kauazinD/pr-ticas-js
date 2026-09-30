const carro = {
    marca: "Fiat",
    cor: "branco",
    modelo: "Toro",
    ano: 2015,
    velocidade:0,
    acelerar: function() {
        this.velocidade+=10
    },
    buzinar: function () {
        console.log("estou buzinando...");
    },
    frear: function() {
        this.velocidade-=5
    },
}
carro.acelerar();
carro.frear();
carro.acelerar();
carro.frear();
carro.acelerar();
carro.frear();
carro.acelerar();
carro.frear();
carro.acelerar();
carro.frear();
carro.acelerar();
carro.frear();
console.table(carro)