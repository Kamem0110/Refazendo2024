function comprar() {
    // Pegando os elementos do DOM
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidadeInput = document.getElementById('qtd').value;

    // Convertendo a quantidade para um número
    const quantidade = parseInt(quantidadeInput, 10);

    // Validando a entrada
    if (isNaN(quantidade) || quantidade < 1) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Pegando os elementos que mostram a quantidade disponível
    const qtdPista = document.getElementById('qtd-pista');
    const qtdSuperior = document.getElementById('qtd-superior');
    const qtdInferior = document.getElementById('qtd-inferior');

    // Criando uma variável para armazenar a quantidade restante
    let qtdAtual;

    switch (tipoIngresso) {
        case 'pista':
            qtdAtual = parseInt(qtdPista.textContent, 10);
            if (quantidade > qtdAtual) {
                alert('Quantidade insuficiente de ingressos na pista.');
                return;
            }
            qtdPista.textContent = qtdAtual - quantidade;
            break;

        case 'superior':
            qtdAtual = parseInt(qtdSuperior.textContent, 10);
            if (quantidade > qtdAtual) {
                alert('Quantidade insuficiente de ingressos na cadeira superior.');
                return;
            }
            qtdSuperior.textContent = qtdAtual - quantidade;
            break;

        case 'inferior':
            qtdAtual = parseInt(qtdInferior.textContent, 10);
            if (quantidade > qtdAtual) {
                alert('Quantidade insuficiente de ingressos na cadeira inferior.');
                return;
            }
            qtdInferior.textContent = qtdAtual - quantidade;
            break;

        default:
            alert('Tipo de ingresso inválido.');
            return;
    }

    alert('Compra realizada com sucesso!');
}
