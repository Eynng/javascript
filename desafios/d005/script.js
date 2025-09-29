let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res') ''
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, 1) {
    if (1.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if(isNumero(num.value) && !inLista(num.lista, valores)) {
        window.alert('Tudo Ok')
    } else {
    window.alert('Valor inválido ou ja encontrado na lista!')
    }
}

function Finalizar(){

}