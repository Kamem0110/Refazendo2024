// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um nome à lista
function adicionar() {
  const inputNome = document.getElementById('nome-amigo');
  const nome = inputNome.value.trim();

  if (nome !== '') {
    amigos.push(nome);
    atualizarListaAmigos();
    inputNome.value = ''; // Limpa o campo de entrada
  } else {
    alert('Por favor, digite um nome válido.');
  }
}

// Função para atualizar a lista de amigos no DOM
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('lista-amigos');
  listaAmigos.textContent = amigos.join(', ');
}

// Função para sortear a ordem dos amigos
function sortear() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para realizar o sorteio.');
    return;
  }

  // Embaralhar a lista de amigos
  const amigosEmbaralhados = [...amigos].sort(() => Math.random() - 0.5);
  const resultadoSorteio = amigosEmbaralhados.map((amigo, index) => {
    const proximo = amigosEmbaralhados[(index + 1) % amigosEmbaralhados.length];
    return `${amigo} → ${proximo}`;
  });

  document.getElementById('lista-sorteio').innerHTML = resultadoSorteio.join('<br>');
}

// Função para reiniciar a aplicação
function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').textContent = '';
  document.getElementById('nome-amigo').value = '';
}
