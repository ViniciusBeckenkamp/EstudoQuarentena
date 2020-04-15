//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).


function tipoTriangulo(a, b, c){
    if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
        if(a == b && a == c && b == c) console.log('Equilátero')
        else if(a == b || b == c || a == c) console.log('Isósceles')
        else if(a != b && a != c && b != c) console.log('Escaleno')
    }else console.log('Medidas inválidas.')
}

tipoTriangulo(1 , 1 , 1)
tipoTriangulo(1 , 2 , 3)    
tipoTriangulo(1 , 1 , 3)