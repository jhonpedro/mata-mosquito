var altura, largura, vidas = 1, tempo_Duracao = parseInt(document.querySelector('#tempo').innerText), tempo_Gera_Mosca

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?','')

switch(dificuldade){
    case '1':
        tempo_Gera_Mosca = 1900
        break
    case '2':
        tempo_Gera_Mosca = 1300
        break
    case '3':
        tempo_Gera_Mosca = 800
        break
    default:
        tempo_Gera_Mosca = 1500
}

console.log(tempo_Gera_Mosca)

function tamanhoJanela() {
    altura = parseInt(window.innerHeight - 90)
    largura = parseInt(window.innerWidth - 90)
    
    if (altura < 90 || largura < 90) {
        altura = altura < 90 ? 90 : altura
        largura = largura < 90 ? 90 : largura
    }
}

var cronometro = setInterval(function(){
    if (tempo_Duracao >= 0 ){
        document.querySelector('#tempo').innerHTML = tempo_Duracao
        tempo_Duracao--
    }else{
        clearInterval(geraMoscas)
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
    }

}, 1000)


function posicaoAleatoria() {
    tamanhoJanela()

    try {
        document.querySelector('#mosca').remove()
        
        document.querySelector('#v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
        // vidas > 3 ? 
    }catch(erro){
        var message = erro.message
        if(message.includes('src')){
            window.location.href = 'fim_de_jogo.html'
        }
        // if(message.includes('remove')){
        //     console.log('Caso usuario remova, pode ser usado como um contador de quantas moscas matou')
        // }

    }finally{

        var posX = Math.floor(Math.random() * altura)
        var posY = Math.floor(Math.random() * largura)

        var mosca = document.createElement('img')
        mosca.src = 'imagens/mosca.png'
        mosca.className = tamanhoAleatorio() + ' ' + lados()
        mosca.style.position = 'absolute'
        mosca.style.top = posX + 'px'
        mosca.style.left = posY + 'px'
        mosca.id = 'mosca'
        mosca.onclick = function () {
            this.remove()
        }


        document.body.appendChild(mosca)    
    }
}

function tamanhoAleatorio() {
    var random = Math.floor(Math.random()*3)
    switch(random) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function lados() {
    var random = Math.floor(Math.random()*2)
    switch(random) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

