function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {  
            gênero = 'Homem'
            if (idade >= 0 && idade < 2){
                //Bebe
                img.setAttribute('src', 'img/recem-masculina.webp')
            } else if (idade >=2 && idade < 12){
                //Criança
                img.setAttribute('src', 'img/crianca-masculina.webp')
            } else if (idade > 12 && idade < 18){
                //Jovem
                img.setAttribute('src', 'img/jovem-masculino.webp')
            } else if (idade >= 18 && idade < 60){
                //Adulto
                img.setAttribute('src', 'img/adulto.webp')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.webp')
            }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 2){
                //Bebe
                img.setAttribute('src', 'img/recem-feminina.webp')
            } else if (idade >=2 && idade < 12){
                //Criança
                img.setAttribute('src', 'img/crianca-feminina.webp')
            } else if (idade > 12 && idade < 18){
                //Jovem
                img.setAttribute('src', 'img/jovem-feminina.webp')
            } else if (idade >= 18 && idade < 60){
                //Adulta
                img.setAttribute('src', 'img/adulta.webp')
            } else {
                //idosa
                img.setAttribute('src', 'img/idosa.webp')
            }
    }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

     }
}