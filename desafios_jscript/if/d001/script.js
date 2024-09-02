function calcular() {
    var n1 = Number(document.getElementById('num1').value)
    var n2 = Number(document.getElementById('num2').value)
    var op = document.getElementById('op').value
    var resTxt = document.getElementById('restxt')
    var resOp = document.getElementById('resop')
    var x = document.getElementById('x')
    var y = document.getElementById('y')
    var result

    // Realiza a operação com base na seleção
        if (op === 'soma') {
            result = n1 + n2
        } else if (op === 'subtracao') {
            result = n1 - n2
        } else if (op === 'multiplicacao') {
            result = n1 * n2
        } else if (op === 'divisao') {
            result = n1 / n2
        }

    // Arredonda o resultado para duas casas decimais
    result = Math.round((result + Number.EPSILON) * 100) / 100;

    // Atualiza o HTML com os valores e o resultado
    resTxt.innerHTML = result
    resOp.innerHTML = op === 'soma' ? '+' : op === 'subtracao' ? '-' : op === 'multiplicacao' ? '*' : '/'
    x.innerHTML = n1 % 1 === 0 ? n1 : n1.toFixed(2)
    y.innerHTML = n2 % 1 === 0 ? n2 : n2.toFixed(2)
}
