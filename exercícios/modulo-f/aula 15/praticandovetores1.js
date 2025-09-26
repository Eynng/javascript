let numeros = [5, 7, 2, 6, 4, 3, 8, 9, 10,]

numeros.sort()
numeros.push(1)
console.log(numeros)
console.log(`O vetor tem  ${numeros.length} posições`)
console.log(`O primeiro valor do vetor e ${numeros[0]}`)
let pos = numeros.indexOf(8)
if (pos < 0) {
    console.log(`o valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

/*
numeros = 6
if (numeros > 5) {
    console.log(`O vetor tem ${numeros} elementos`)

} else {
    console.log(`Inválido`)
}

*/