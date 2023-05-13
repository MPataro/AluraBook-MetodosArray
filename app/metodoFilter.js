const botoes = document.querySelectorAll('.btn');
const btnDisponiveis = document.getElementById('btnLivrosDisponiveis');


botoes.forEach(btn => btn.addEventListener('click', filtrar));

function filtrar() {
    const elementoBtn = document.getElementById(this.id);
    let livrosFiltrados = elementoBtn.value == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(elementoBtn);
    exibirLivros(livrosFiltrados);
    if (elementoBtn.value == 'disponivel'){
        const valorTotal = calcularValorTotal(livrosFiltrados);
        exibirValorTotal(valorTotal);  
    } 
}

function filtrarPorCategoria(elementoBtn) {
    return livros.filter(livro => livro.categoria == elementoBtn.value);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

//PERGUNTAR AO TANAKA: COMO FAZER A FUNÇÃO ABAIXO RODAR JUNTO COM A DE CIMA (REFATORAR CÓDIGO)

function exibirValorTotal(valorTotal) {
    elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
//Metodo feito manual sem operador ternario
// btnDisponiveis.addEventListener('click', function filtrarDisponiveis (){
//     let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
//     exibirLivros(livrosDisponiveis)
// }) 

