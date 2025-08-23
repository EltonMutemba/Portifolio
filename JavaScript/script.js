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



    //Carrossel

    const slides = document.querySelector('.slides');
    const imagens = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let index = 0;

    function mostrarSlide(n) {
      if (n < 0) {
        index = imagens.length - 1;
      } else if (n >= imagens.length) {
        index = 0;
      }
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      index--;
      mostrarSlide(index);
    });

    nextBtn.addEventListener('click', () => {
      index++;
      mostrarSlide(index);
    });

    // Auto-play a cada 3 segundos
    setInterval(() => {
      index++;
      mostrarSlide(index);
    }, 9000);

