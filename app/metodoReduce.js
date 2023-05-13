function calcularValorTotal(livros){
    return livros.reduce((acc, livros) => acc + livros.preco, 0).toFixed(2)
    console.log("valorTotal")
}