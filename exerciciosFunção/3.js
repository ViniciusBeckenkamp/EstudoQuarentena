//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function retornoElevado(base, expoente){

    let retorno = base
    let i = 1

    while(i < expoente){
        i++
        retorno = retorno * base
    }
    console.log(retorno)
}

retornoElevado(2, 5)

// método mais fácil

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 5))