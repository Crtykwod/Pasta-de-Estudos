//Converter em número:

Number.parseInt(n) // Número Inteiro.
Number.parseFloat(n) // Número Real (Float Point).
Number(n) // Tanto para Inteiros, quanto Reais.


//Converter em string:

String(n)
n.toString()
n.toString().replace(".", ",") // trocar ponto por vírgula

//________________________________________________________________//

//Operadores Aritméticos:

5 + 2 = 7   // Soma
5 - 2 = 3   // Subtração
5 * 2 = 10  // Multiplicação
5 / 2 = 2.5 // Divisão Real (Float)
5 % 2 = 1   // Resto da Divisão Inteira (s/ decimal)
5 ** 2 = 25 // Potenciação


//Operadores Relacionais

5 > 2   = true  // Maior que
7 < 4   = false // Menor que
8 >= 8  = true  // Maior ou Igual que
9 <= 7  = false // Menor ou Igual que
5 == 5  = true  // Igual à
4 != 4  = false // Diferente de


//Operadores de Identidade

5 == 5      = true  // Igual à
5 == '5'    = true  // Igual à mesmo que de tipos diferentes
5 !== '5'   = true  // Desigual Restrito (tipos diferentes)
5 === '5'   = false // Igual à e do mesmo tipo
5 === 5     = true  // Igual Restrito (mesmo tipo)


//Operadores Lógicos

!   negação     (não)   // Valor inverso
    ! true  = false
    ! false = true

&&  conjunção   (e)     // Ambos precisam ser verdadeiro
    true  &&  true  = true
    true  &&  false = false
    false &&  true  = false
    false &&  false = false

||  disjunção   (ou)    // Ao menos um precisa ser verdadeiro
    true  ||  true  = true
    true  ||  false = true
    false ||  true  = true
    false ||  false = false

    //Exemplos

    idade >= 15 && idade <= 17        // a idade está entre 15 e 17?
    estado == 'RJ' || estado == 'SP'  // o estado é RJ ou SP?
    salário > 1500 && sexo != 'M'     // o salário é acima de 1500 e nao é homem?


//Operadores Ternários

'teste' ? true : false
    média >= 7 ? 'Aprovado' : 'Reprovado'

//________________________________________________________________//

//Ordem de Precedência

    | 1 - Operadores Aritméticos
    |   ()
    |   []
    |   {}          5 + 4 / 2 ** 2     = 6
    |   **          [(5 + 4) / 2] ** 2 = 20.25
    |   * / %
    |   + -
    |
    | 2 - Operadores Relacionais
    |   > < <= >= == != === !== 
    |
    | 3 - Operadores Lógicos
    |   !  - Negação   (não)
    |   && - Conjunção (e)
    |   || - Disjunção (ou)
    V

(4.5 + 7) * 2 == 23 && 25 % [(2 + 1) * (24 % 3)] != 23
> true

//________________________________________________________________//

//Atribuição Simples

var a = 5 + 3           = 8
var b = a % 5           = 3
var c = 5 * b ** 2      = 45
var d = 10 - a / 2      = 6
var e = 6 * 2 / d       = 2
var f = b % e + 4 / e   = 3


//Auto-atribuições

var n = 3   n = 3
n = n + 4   n = 7   [n += 4]  // Simplificação
n = n - 5   n = 2   [n -= 5]  // Simplificação
n = n * 4   n = 8   [n *= 4]  // Simplificação
n = n / 2   n = 4   [n /= 2]  // Simplificação
n = n ** 2  n = 16  [n **= 2] // Simplificação
n = n % 5   n = 1   [n %= 5]  // Simplificação


//Incremento

var x = 5
x = x + 1   x += 1  [x ++]
x = x - 1   x -= 1  [x --]

//________________________________________________________________//

// Formatando Strings:

var nome = 'Carlos'
var idade = 17
var nota = 6.7

> "O aluno " + nome + ", de " + idade + " anos, tirou nota " + nota + "na prova"
// 'O aluno Carlos, de 17 anos, tirou nota 6.7na prova'

> `O aluno ${nome}, de ${idade}, tirou nota ${nota}` // Usar apóstrofe (` `) ao invés de aspas (" ") (' ')
// 'O aluno Carlos, de 17, tirou nota 6.7'


var s = 'JavaScript'

s.length        // quantos caracteres a string tem
s.toUpperCase   // tudo para 'MAIÚSCULAS'
s.toLowerCase   // tudo para 'minúsculas'

//________________________________________________________________//

//Formatando Números

var n1 = 1543.5

n1.toFixed(2) //define o número de casas decimais
n1.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}) //transforma em R$

//________________________________________________________________//

//Selecionar elementos no DOM

'Por Marca'
    getElementsByTagName()
'Por ID'
    getElementById()
'Por Nome'
    getElementsByName()
'Por Classe'
    getElementsByClassName()
'Por Seletor'
    querySelector()
    querySelectorAll() //Plural

//______________________________________________________________//

//Condições

if (condição) {
    'true'
} else {
    'false'
}

//Tipos de Condição:

    //Condição Simples

    if (condição) {
        
    }

    //Condição Composta

    if (condição) {
        
    } else {
        
    }

    //Condições Aninhadas

    if (cond1) {
        'bloco1'
    } else {
        if (cond2) {
            'bloco2'
        } else {
            'bloco3'
        }
    }

    //Condições Multiplas (switch)

    switch (expressão) {
        case valor1:
            'Result 1'
             break
        case valor2:
            'Result 2'
             break
        case valor3:
            'Result 3'
             break
        default:
            'Result 4'
             break
    }

//____________________________________________________________//

//Repetições

function comerPizza() {
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}

// Estrutura de Repetição com teste lógico no ínico

while (condição) {
    "bloco a executar"
    
}   // Repete a execução do bloco enquanto a condição for verdade

function comerPizza() {
    while(temFatia()) {
        comerFatia()
    }
}

// Estrutura de Repetição com teste lógico no final

do {
    "bloco a executar"
} while (condição)

// Estruta de Repetição com Variável de Controle

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

for (var c=1; c<=10; c++) {
    console.log(c)
}