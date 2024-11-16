//não deu certo no curso
/*function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.deshboard__item__img');
    let botao = gameClicado.querySelector('.deshboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

}*/

//criado pelo chat
function alterarStatus(gameId) {
    // Seleciona o item do jogo pelo ID
    const gameItem = document.getElementById(`game-${gameId}`);
    const button = gameItem.querySelector('.dashboard__item__button');
    const imgContainer = gameItem.querySelector('.dashboard__item__img');
  
    // Verifica se o jogo está alugado ou disponível
    if (button.classList.contains('dashboard__item__button--return')) {
      // Jogo está alugado, devolver
      button.textContent = 'Alugar';
      button.classList.remove('dashboard__item__button--return');
      imgContainer.classList.remove('dashboard__item__img--rented');
    } else {
      // Jogo está disponível, alugar
      button.textContent = 'Devolver';
      button.classList.add('dashboard__item__button--return');
      imgContainer.classList.add('dashboard__item__img--rented');
    }
  }
  