const valores = [];
const registro = document.getElementById("registro");
const botaoRemover = document.getElementById('remover')
var finalizarExec = false

// Adiciona um novo item ao Registro
function novoRegistro(n) {
    valores.push(n);
    const valor = document.createElement("option");
    valor.textContent = `Valor ${n} adicionado`;
    valor.value = valores.indexOf(n);
    registro.appendChild(valor);

    if (botaoRemover.classList.contains("oculto")) {
        botaoRemover.classList.toggle("oculto")
    }
}

function adicionarValor() {
    const num = document.getElementById("numero").value;

    // Verifica se os requisitos foram preenchidos
    if (num == "") {
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus()
        return alert("Insira um número!");
    } else if (num < 1 || num > 100) {
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus()
        return alert("Insira um valor válido! (Entre 1 e 100)");
    } else {
        // Limpa o campo de input após adicionar o valor
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus()

        // Finaliza a função adicionando um valor à lista
        return novoRegistro(num);
    }
}

function finalizar() {
    // Função para calcular o maior valor
    function maximo() {
        // Define o primeiro valor como base
        var max = valores[0];
        // Isso passará por todos os valores do array
        for (let i = 0; i < valores.length; i++) {
            // Se o valor atual da array for maior que max, ele se torna max, caso contrário, repete o for
            if (valores[i] > max) {
                max = valores[i];
            }
        }
        return max;
    }

    // Função para calcular a soma dos valores
    function soma() {
        // Variável que comportará o resultado
        var sum = 0;
        // Isso passará por todos os valores do array
        for (let i = 0; i < valores.length; i++) {
            // Soma o valor atual do array à var sum
            sum += Number(valores[i]);
        }
        return sum;
    }

    // Função para calcular a média dos valores
    function media() {
        // Variável que receberá a média
        var med = 0;
        // Isso passará por todos os valores do array
        for (let i = 0; i < valores.length; i++) {
            // Soma todos os valores do array
            med += Number(valores[i]);
        }
        // Divide o valor da soma pela quantidade de valores
        med /= valores.length;

        if (med % 1 !== 0) {
            med = med.toFixed(3);
        }
        return med;
    }

    if (valores == 0) {
        alert("Insira ao menos um número!");
    } else {
        // Organiza os valores em ordem crescente
        valores.sort();

        const res = document.getElementById("res");
        res.innerHTML = `<p>Ao todo, temos ${
            valores.length
        } números cadastrados </p>
        <p>O maior valor informado foi ${maximo()}</p>
        <p>O menor valor informado foi ${valores[0]}</p>
        <p>Somando todos os valores, temos ${soma()}</p>
        <p>A média dos valores digitados é ${media()}`;
    }
    finalizarExec = true
}

function removerValor() {
    // Vai pegar o item selecionado no registro
    var index = registro.selectedIndex;
    // Verifica se algum item está selecionado
    if (index !== -1) {
        // Remove o valor selecionado do array
        valores.splice(index, 1);
        // Remove o valor selecionado do registro
        registro.remove(index);

        if (finalizarExec) {
            finalizar()
        }
    } else {
        alert("Selecione um valor para remover!");
    }

    // Verifica se há valores, caso não, oculta o botão
    function verificarBotaoRemover() {
        if (valores == 0) {
            botaoRemover.classList.toggle("oculto")
            location.reload()
        }
    }
    verificarBotaoRemover()
}

