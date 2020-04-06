//ajuda a ter um código mais "elegante" e prático

const nome = 'Rebeca'
const cocatenacao = 'Olá' + nome  + '!'
const template = `
    Olá
    ${nome}!` //O ${} é para usar a variavel.

console.log(cocatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Função apra transformar em letra maiuscula
console.log(`Ei... ${up('Cuidado')}!`)