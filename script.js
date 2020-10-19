
function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var teste = document.getElementsByClassName('brd')[0];
    //teste.style.backgroundColor='#c20'
    //console.log(teste)
    var data = new Date()
    var hora = data.getHours()//.toLocaleString()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#FDF5C7'
        // BOM DIA
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        // BOA TARDE
        document.body.style.background = '#FFC4B5'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#B39484'
    }

}