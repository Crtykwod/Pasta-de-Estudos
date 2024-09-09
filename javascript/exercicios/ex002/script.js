var hoje = new Date();
var dd = hoje.getDate();
var mm = hoje.getMonth() + 1; // Começa em 0, então +1 para começar em 1
var aa = hoje.getFullYear();

// Adiciona um 0 antes caso o numero seja menor que 10
// Assim, março, ao invés de mês 3, é mês 03
var dataNascimento = document.getElementById("dataNascimento");
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}
hoje = `${aa}-${mm}-${dd}`; // Modelo de escrita do HTML (aaaa-mm-dd)
dataNascimento.setAttribute("max", hoje);

var form = document.getElementById("form");
var imagem = document.getElementsByClassName("imagem")[0]
var resultado = document.getElementById('resultado')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    imagem.style.display = 'block';

    // Separa o ano do resto da data
    var dataNascimento = document.getElementById('dataNascimento').value
    var getAno = dataNascimento.split("-")
    var ano = getAno[0] // A contagem sempre começa no 0 (AAA-MM-DD)
    var idade = aa - ano

    // Diz a idade no resultado
    resultado.innerHTML = `Você tem ${idade} anos!`

    //Checa qual gênero está marcado
    var gen = document.querySelector('input[name="gen"]:checked').value

    if (idade >= 0) {
        if (gen == 'genM') {
            imagem.classList.add('menino');
        } else {
            imagem.classList.add('menina');
        }
    } else if (idade >= 18 && idade < 60) {
        if (gen == 'genM') {
            imagem.classList.add('homem');
        } else {
            imagem.classList.add('mulher');
        }
    } else {
        if (gen == 'genM') {
            imagem.classList.add('idoso');
        } else {
            imagem.classList.add('idosa');
        }
    }
})
