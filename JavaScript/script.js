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

function toggleDescricao() {
    const descricao = document.getElementById('descricaoMasterWash');
    descricao.style.display = (descricao.style.display === 'block') ? 'none' : 'block';
}
const btn = document.getElementById("btnTop");

    // Mostrar botão quando o user rolar
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Ao clicar, volta ao topo
    btn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

