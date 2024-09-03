function calc() {
    var peso = Number(document.getElementById('peso').value)
    var altura = Number(document.getElementById('altura').value)
    var resultado = document.getElementById('resultado')
    var res
    res = peso / (altura / 100) ** 2
    resultado.innerHTML = `Seu IMC é ${res % 1 === 0 ? res : res.toFixed(2)}` 
    nivelImc()
    
        function nivelImc() {
        var resTxt = document.getElementById('resTxt')
        var imc
        if (res < 18.5) {
            imc = 'Baixo Peso'
            resTxt.classList.add('Abaixo')
        } else if (res >= 18.5 && res < 25) {
            imc = 'Peso Normal'
            resTxt.classList.add('Bom')
        } else if (res >= 25 && res < 30) {
            imc = 'Excesso de Peso'
            resTxt.classList.add('Cuidado')
        } else if (res >= 30 && res < 35) {
            imc = 'Obesidade'
            resTxt.classList.add('Perigoso')
        } else if (res >= 35) {
            imc = 'Obesidade Extrema'
            resTxt.classList.add('Perigoso+')
        }

        resTxt.innerHTML = `Você está com ${imc}`
    }
}

