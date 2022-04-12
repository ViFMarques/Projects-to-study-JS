function carregar() {
    var msg = window.document.getElementById ('msg')
    var imagem = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var desejo = window.document.getElementById ('desejo')
    var pessoa = prompt(" Olá :)  Como posso te chamar?");

    msg.innerHTML =  `Agora são <strong> ${hora}:${minuto} </strong> horas`
    if (hora >= 0 && hora < 12) {
        desejo.innerHTML = `Tenha um ótimo dia, ${pessoa}!`
        imagem.src = 'fotomanha.png' 
        document.body.style.background = '#FFE4B5'
    } else if (hora >= 12 && hora <= 18) {
        desejo.innerHTML = `Tenha uma tarde íncrivel, ${pessoa}!`
        imagem.src = 'fototarde.png' 
        document.body.style.background = 'coral'
    } else {
        desejo.innerHTML = `Tenha uma excelente noite ${pessoa}!`
        imagem.src = 'fotonoite.png' 
        document.body.style.background = '#363636'
    }
}

