var idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { // (idade >= 16 está implicito)
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatório')
}