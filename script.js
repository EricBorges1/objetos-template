/*const estudante = {            // criação do objeto estudante
    nome: 'Buda',                
    sobrenome: 'Peste',
    numeroDeMatricula: 2023161359,
    notasDoSemestre: [6.5, 5, 7.9, 10, 8]
}
estudante.modulo = 3



const copiaEstudante = {   // criação da cópia do objeto
    ...estudante
}
copiaEstudante.nome = 'AstroDev'     // mudando valores do objeto

copiaEstudante.notasDoSemestre.push(9)//adcioanndo 9 ao final de notas

copiaEstudante.modulo = 4

console.log(copiaEstudante)

const estudantesLabenu = [] // criando array de estudantes labenu

estudantesLabenu.push(estudante, copiaEstudante)

console.log(`Array de estudantes da Labenu:`, estudantesLabenu) */

const carrinho = {
    nome:  'eric',
    formaDePagamento: 'debito',
    endereco: 'RuaBacoBaco'
}
carrinho.compras = [
{
    nome:'UVA',
    preço: 10, 
    quantidade:3
}, 
{
    nome:'ALCATRA',
    preço: 34.99,
    quantidade:4
},
]
console.log(carrinho)

const qtdadeProdutos = carrinho.compras.length 
console.log(qtdadeProdutos)  // 2

const copiaDoCarrinho = {
    ...carrinho,
    nome: 'Maria',
    formaDePagamento:  'Cartão Presente'
}
console.log(carrinho , copiaDoCarrinho)



















/*//alterar o nome para Astrodev
//adcionar a nota 9 às notas do semestre
//alterar o módulo para o próximo módulo
//imprimir o objeto com as atualizações */







/*const copiaEstudante = {
    ...estudante,
    nome: 'Astrodev',
    modulo: 4,
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    numeroDeMatricula: 10
}*/

/*const nomeDoEstudante = estudante.nome
console.log('Nome do estudante:',nomeDoEstudante)

const segundaNotaDoSemestre = estudante.notasDoSemestre[1]
console.log('Segunda nota do semestre:',segundaNotaDoSemestre)

const moduloAtual = estudante.modulo
console.log('Modulo atual:',moduloAtual)

// // // // // // // // // // // // // // // // // // // // // // */
