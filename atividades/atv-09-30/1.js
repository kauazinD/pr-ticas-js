const livro={
    titulo:"A Hora da Estrela",
    autor:"Clarice Lispector",
    paginas:567,
    resumo: function() {
        console.log(this.titulo,"foi escrito por", this.autor, "e possui", this.paginas, "paginas")
    }
}
livro.resumo()