//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = ["Ana", "Lucas", "Mariana", "Carlos", "Fernanda"]; // Nomes populares pré-adicionados
let sorteioRealizado = false;

// Exibe os nomes iniciais na lista
document.addEventListener("DOMContentLoaded", () => {
    atualizarLista();
});

// Função para adicionar amigos à lista
function adicionarAmigo() {
    if (sorteioRealizado) {
        alert("O sorteio já foi realizado! Recarregue a página para começar de novo.");
        return;
    }

    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já está na lista.");
        return;
    }

    amigos.push(nome);
    input.value = ""; 
    atualizarLista();
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 participantes para realizar o sorteio.");
        return;
    }

    let sorteados = [...amigos]; // Copia a lista original
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let possiveisSorteados = sorteados.filter(nome => nome !== amigos[i]);

        if (possiveisSorteados.length === 0) {
            alert("Erro no sorteio. Tente novamente!");
            return;
        }

        let escolhido = possiveisSorteados[Math.floor(Math.random() * possiveisSorteados.length)];
        resultado.push({ amigo: amigos[i], sorteado: escolhido });

        sorteados.splice(sorteados.indexOf(escolhido), 1);
    }

    exibirResultado(resultado);
    sorteioRealizado = true;
}

// Exibir o resultado do sorteio na tela
function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    resultado.forEach(par => {
        let li = document.createElement("li");
        li.textContent = `${par.amigo} → ${par.sorteado}`;
        listaResultado.appendChild(li);
    });
}