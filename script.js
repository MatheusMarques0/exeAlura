function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '##FEF2DC'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fotodatarde.png'
        document.body.style.background = '#FFA54E'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#181D30'
    }
}