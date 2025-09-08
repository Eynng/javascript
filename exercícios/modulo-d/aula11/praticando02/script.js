function verificar() {
    var txtpais = window.document.getElementById('txtpais')
    var res = window.document.getElementById('res')
    var pais = String(txtpais.value)
    res.innerHTML = `Sua nacionalidade é:<strong>${pais}</strong>`

    if (pais == 'Brasil' || pais == 'brasil') {
        res.innerHTML += '<p>Voce é <strong>brasileiro</strong>, e esta na regiao da <strong>America do Sul</strong></p> '
        
    } else if (pais == 'Portugal' || pais == 'portugal') {
        res.innerHTML += '<p>Voce é portugues e esta na regiao da <strong>Europa</strong></p>'
    } else if (pais == 'França' || pais == 'frança' ) {
        res.innerHTML += '<p>Voce é frances e esta na regiao da <strong>Europa</strong></p>'
    } else if (pais == 'Alemanha' || pais == 'alemanha') {
        res.innerHTML += '<p>Voce é alemao e esta na regiao da <strong>Europa</strong></p>'
    } else if (pais == 'Italia' || pais == 'italia') {
        res.innerHTML += '<p>Voce é italiano e esta na regiao da <strong>Europa</strong></p>'
    } else if (pais == 'Espanha' || pais == 'espanha') {
        res.innerHTML += '<p>Voce é espanhol e esta na regiao da <strong>Europa</strong></p>'
    } else if (pais == '') {
        res.innerHTML += '<p>Insira um <strong>Pais!</strong></p>'
    } else if (pais == 'Argentina' || pais == 'argentina') {
        res.innerHTML += '<p>Voce é argentino e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Chile' || pais == 'chile') {
        res.innerHTML += '<p>Voce é chileno e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Colombia' || pais == 'colombia') {
        res.innerHTML += '<p>Voce é colombiano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if ( pais == 'Bolivia' || pais == 'bolivia') {
        res.innerHTML += '<p>Voce é boliviano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Peru' || pais == 'peru') {
        res.innerHTML += '<p>Voce é peruano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Venezuela' || pais == 'venezuela') {
        res.innerHTML += '<p>Voce é venezuelano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Equador' || pais == 'equador') {
        res.innerHTML += '<p>Voce é equatoriano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Paraguay' || pais == 'paraguay') {
        res.innerHTML += '<p>Voce é paraguaio e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Suriname' || pais == 'suriname') {
        res.innerHTML += '<p>Voce é suriname e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Uruguai' || pais == 'uruguai') {
        res.innerHTML += '<p>Voce é uruguai e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Chile' || pais == 'chile') {
        res.innerHTML += '<p>Voce é chileno e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Colombia' || pais == 'colombia') {
        res.innerHTML += '<p>Voce é colombiano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if ( pais == 'Bolivia' || pais == 'bolivia') {
        res.innerHTML += '<p>Voce é boliviano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Peru' || pais == 'peru') {
        res.innerHTML += '<p>Voce é peruano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Venezuela' || pais == 'venezuela') {
        res.innerHTML += '<p>Voce é venezuelano e esta na regiao da <strong>America do Sul</strong></p>'
    } else if (pais == 'Equador' || pais == 'equador') {
        res.innerHTML += '<p>Voce é equatoriano e esta na regiao da <strong>America do Sul</strong></p>'
    }
}

function limpar() {
    var txtpais = window.document.getElementById('txtpais')
    var res = window.document.getElementById('res')
    txtpais.value = ''
    res.innerHTML = ''
}