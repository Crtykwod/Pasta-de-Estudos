var un = document.getElementById('un');
var input = document.getElementById('input');
var output = document.getElementById('output');
var simbolo = document.getElementById('simbolo')
var result;

function calcular() {
    // Obter o valor do input como número
    var inputValue = Number(input.value);
    output.style.color = 'black'

    if (un.value === 'C') {
        result = (inputValue * 9/5) + 32;
        output.innerHTML = (result % 1 === 0 ? result : result.toFixed(2)) + ' °F'; 
    } else if (un.value === 'F') {
        result = (inputValue - 32) * 5/9;
        output.innerHTML = (result % 1 === 0 ? result : result.toFixed(2)) + ' °C';
    }
}