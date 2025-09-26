let valores = [8 , 1 , 7 , 4 , 2 , 9 , 1 , 5 , 8 , 4 ] 


               /* PERCURSO PRA EXIBIÇÃO DO VETOR */

valores.sort() /* organiza em ordem numérica */
valores.push(3) /* adiciona o valor 3 ao final do array */


console.log(valores)

                /* JEITO ERRADO DE EXECUTAR UM ARRAY/VETOR */

onsole.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])
console.log(valores[8])


                   /* FORMA PADRÃO DE EXECUÇÃO DE UM ARRAY/VETOR */
/*para*/
 for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
 }

                    /* FORAM SIMPLIFICADA PRA EXIBIÇÃO DE UM ARRAY/VETOR */

/*para cada posição em num (variavel composta)*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}

