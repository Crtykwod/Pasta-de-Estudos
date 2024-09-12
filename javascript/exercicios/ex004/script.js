var lista = document.getElementById("lista");

function calcular() {
    // Remove os itens da lista se o botão for pressionado novamente
    lista.innerHTML = "";

    var numero = document.getElementById("tabuada").value;

    // Trata o campo vazio como número 0
    if (numero == "") {
        numero = 0;
    }

    for (var i = 1; i <= 10; i++) {
        // Funcão que cria e coloca o valor como itens de uma lista
        function multiplicar(valor) {
            // Cria um item para a lista
            var option = document.createElement("option");
            // Define o conteúdo da lista
            option.innerHTML = `${numero} x ${i} = ${valor}`;
            // Diz que <option> deverá ficar dentro de <select#lista>
            lista.appendChild(option);
            option.value = i;
        }
        // Define o resultado da tabuada e executa a função
        var res = numero * i;
        multiplicar(res);
    }
}
