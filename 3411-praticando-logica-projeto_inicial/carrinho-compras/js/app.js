document.addEventListener("DOMContentLoaded", () => {
    const listaProdutos = document.getElementById("lista-produtos");
    const valorTotal = document.getElementById("valor-total");
    const produtoInput = document.getElementById("produto");
    const quantidadeInput = document.getElementById("quantidade");
  
    let total = 0;
  
    function adicionar() {
      const produtoSelecionado = produtoInput.value;
      const quantidade = parseInt(quantidadeInput.value);
  
      if (!quantidade || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
      }
  
      const [produtoNome, precoStr] = produtoSelecionado.split(" - R$");
      const preco = parseFloat(precoStr);
  
      // Cria o elemento de produto
      const produtoElemento = document.createElement("section");
      produtoElemento.classList.add("carrinho__produtos__produto");
      produtoElemento.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${preco * quantidade}</span>`;
  
      // Adiciona o produto à lista
      listaProdutos.appendChild(produtoElemento);
  
      // Atualiza o total
      total += preco * quantidade;
      valorTotal.textContent = `R$${total}`;
    }
  
    function limpar() {
      // Remove todos os produtos da lista
      listaProdutos.innerHTML = "";
  
      // Reseta o total
      total = 0;
      valorTotal.textContent = "R$0";
    }
  
    // Expondo as funções para o HTML
    window.adicionar = adicionar;
    window.limpar = limpar;
  });
  