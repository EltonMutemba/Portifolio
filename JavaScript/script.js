function clickMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function mostrarProjeto(id) {
    // 1. Oculta todos os projetos com a classe 'projeto_item'
    const projetos = document.querySelectorAll('.projeto_item');
    projetos.forEach(projeto => {
        projeto.style.display = 'none';
    });

    // 2. Mostra o projeto selecionado
    const projetoSelecionado = document.getElementById(id);
    if (projetoSelecionado) {
        projetoSelecionado.style.display = 'flex';
    }
}

// 3. Adiciona um listener para a carga da página para exibir o projeto desktop por padrão
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o primeiro projeto visível (você pode escolher qual)
    mostrarProjeto('desktop');
});

