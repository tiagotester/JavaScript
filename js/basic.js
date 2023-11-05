console.log('Olá, Javascript!')

var username = 'Tiago Leite'
document.getElementById('user-name').innerHTML = username

// variáveis

// var nome = 'Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// operadores matemáticos

// + soma - subtração * multiplicar / dividir
// var n1 = 7
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// var total = n1 / n2
// console.log(total)

//operadores de comparação

// var v1 = 5
// var v2 = '5'

// var resultado = v1!==v2
// console.log(resultado)

//funções

// function soma(n1, n2) {
//     console.log(n1+n2)
// }

// soma(5,5)

// function boasVindas(nome) {
//     alert(nome + ', sejam bem vindos')
// }

// boasVindas('tiago')

// function soma(n1,n2) {
//     return n1+n2
// }

// var resultado = soma(5,5)
// console.log(resultado)

//controle de fluxos//

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar/ em lugares que não aceitam o cartão de débito ou crédito


// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// var saldo = 1000
// function saque(valor) {
//     saldo = saldo - valor
// }

// saque(500)
// console.log(saldo)

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// var saldo = 1000
// function saque(valor){
//     if (valor > saldo){
//         console.log('valor do saqu maior que o saldo')
//     } else {
//         saldo = saldo - valor
//     }
    
// }
// saque(1001)
// console.log(saldo)

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// var saldo = 1000
// function saque(valor){
//     if (valor > saldo){
//         console.log('valor do saque maior que o saldo')
//     } else if (valor > 700) {
//         console.log('valor do saque maior que o máximo permitido por operação')

//     } else {
//         saldo = saldo - valor
//     }
    
// }
// saque(701)
// console.log(saldo)


// Arrays //

// var personagens = ['yoda', 'luke', 'leia', 'vader']

// personagens.push('r2d2')
// personagens.push('ren')

// // personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'vader'
// }) 

// personagens = personagens.filter(function(p){
//     return p == 'yoda'
// }) 

// console.log(personagens)

// controles de repetição (loops)

// var personagens = ['yoda', 'luke', 'leia', 'vader', 'r2d2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens){
//     console.log(personagens[i])
// }

// for(var i=0; i<=10; i++){
//     console.log(i)
//     //executado até a condição retornar false
// }

//objetos//
// var yoda = {
//     nome: 'mestre yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`a idade do ${this.nome} é ${this.idade}`)
//     }
// }
// yoda.nome = 'mestre yoda'
// yoda.idade = 100
// yoda.jedi = true
// yoda.planeta = "tatooine"

// console.log(yoda)
// yoda.mostraIdade()

// constantes//
const nome = 'vader'
console.log(nome)

nome = 'yoda'
console.log(nome)