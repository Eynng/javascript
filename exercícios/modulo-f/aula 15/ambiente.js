let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) 

if (pos < 0 ) {
    console.log('O valor não foi encontrado no vetor')
} else {
    console.log(`O valor está na posição ${pos}`)
}

let num = [5 , 2 , 4 , 6 , 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)

if (pos < 0) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

let num = [2 , 4 , 6 , 3 , 5]

num.push(1)
num.sort()
num.push(7)

console.log(num)

let pos = num.indexOf(2)        

if (pos > 0) {
    console.log(`O valor está na posição ${pos}`)
} else {
    console.log('O valor não foi encontrado')
}

let num = [2 , 4  ,6  ,3  ,5]

num.push(1)
num.push(7)
num.push(8)
num.push(9) 
num.sort()

console.log(`O vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(1)

 if (pos > 0) {
    console.log(`O valor que está na posição ${pos}`)
 } else {
    console.log(`O valor está invalido`)
 }

