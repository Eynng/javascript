/*function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
} 
*/

    /*function tabuada() {
        let num = document.getElementById('txtn')
        let tab = document.getElementById('seltab')
        tab.innerHTML = ''
        if (num.value.length == 0) {
            window.alert('[ERRO] digite um número!')
        } else {
            let n = Number(num.value)
            let c = 1
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.appendChild(item)
                c++
            }
        }
    } */

        function tabuada() {
            let num = document.getElementById('txtn')
            let tab = document.getElementById('seltab')
            tab.innerHTML = ''
            if (num.value.length == 0) {
                windown.alert('[ERRO] digite um número!')
            } else {
                let n = Number(num.value)
                let c = 1
                while (c <= 10) {
                    let item = document.createElement('option')
                    item.text =(`${n} x ${c} = ${n*c}`)
                    tab.appendChild(item)
                    c++
                }
            } 
        }

        function limpar() {
            let txtn = document.getElementById('txtn')
            let seltab = document.getElementById('seltab')
            txtn.value = ''
            seltab.innerHTML = ''
            seltab.value = ''
        }