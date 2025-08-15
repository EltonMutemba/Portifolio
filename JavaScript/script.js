function clickMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Opcional: para esconder o menu quando a tela é redimensionada para desktop
window.addEventListener('resize', () => {
    const menu = document.getElementById('menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});

// Lógica para mostrar projetos (ajustada para os novos IDs)
function mostrarProjeto(projetoId) {
    const projetos = document.querySelectorAll('.projeto_item');
    projetos.forEach(projeto => {
        projeto.style.display = 'none';
    });
    
    const projetoSelecionado = document.getElementById(projetoId + '_proj');
    if (projetoSelecionado) {
        projetoSelecionado.style.display = 'flex'; // ou 'block', dependendo do layout
    }
}

// Exibir o projeto desktop por padrão na carga da página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProjeto('desktop');
});