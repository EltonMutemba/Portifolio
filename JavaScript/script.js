

function clickMenu(){

    if(menu.style.display=='none'){
        menu.style.display ='flex'
    }else{
        menu.style.display ='none'
    }
    
}

function mostrarProjeto(id) {
    // esconde todos
    document.getElementById('web').style.display = 'none';
    document.getElementById('mobile').style.display = 'none';
    document.getElementById('desktop').style.display = 'none';

    // mostra só o clicado
    document.getElementById(id).style.display = 'flex';
}