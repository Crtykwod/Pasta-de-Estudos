var form = document.getElementById("form");
var result = document.getElementById("resultado");
var resTxt = document.getElementById("resTxt");

form.addEventListener("submit", function (event) {
    // Previne a página de reiniciar
    event.preventDefault();

    // Pegar as informações do HTML
    var inicio = Number(document.getElementById("inicio").value);
    var fim = Number(document.getElementById("fim").value);
    var passo = Number(document.getElementById("passo").value);

    if (fim == 0) {
        resTxt.innerHTML = "Insira um valor final.";
        resTxt.style.background = "red";
        return;
    } else if ((inicio < fim && passo > fim) || passo <= 0) {
        alert("Passo inválido, considerando Passo = 1");
        passo = 1;
    }
    resTxt.innerHTML = "Contando: ";

    // Limpar os resultados anteriores
    result.innerHTML = "";

    // Verifica se é crescente ou decrescente
    if (inicio < fim) {
        // Crescente
        while (inicio <= fim) {
            function novoNumero(valor) {
                var li = document.createElement("li");
                li.textContent = valor;
                result.appendChild(li);
            }
            novoNumero(inicio);
            inicio += passo;
        }
    } else {
        // Decrescente
        while (inicio >= fim) {
            function novoNumero(valor) {
                var li = document.createElement("li");
                li.textContent = valor;
                result.appendChild(li);
            }
            novoNumero(inicio);
            inicio -= passo;
        }
    }
});
