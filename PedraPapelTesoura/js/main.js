//Definindo variaveis
var tesoura = false;
var pedra = false;
var papel = false;

//Selecionando a imagem pedra
function selecionaPedra() {
    window.document.getElementsByClassName("imagem_pedra")
    [0].src = "./img/pedra.png";
    window.document.getElementsByClassName("imagem_tesoura")
    [0].src = "./img/tesoura.png";
    window.document.getElementsByClassName("imagem_papel")
    [0].src = "./img/papel.png";

    tesoura = false;
    pedra = true;
    papel = false;
}
//Selecionado a imagem papel
function selecionaPapel() {
    window.document.getElementsByClassName("imagem_papel")
    [0].src = "./img/papel.png";
    window.document.getElementsByClassName("imagem_pedra")
    [0].src = "./img/pedra.png";
    window.document.getElementsByClassName("imagem_tesoura")
    [0].src = "./img/tesoura.png";

    tesoura = false;
    pedra = false;
    papel = true;
}
//Selecionando tesoura
function selecionaTesoura() {
    window.document.getElementsByClassName("imagem_tesoura")
    [0].src = "./img/tesoura.png";
    window.document.getElementsByClassName("imagem_pedra")
    [0].src = "./img/pedra.png";
    window.document.getElementsByClassName("imagem_papel")
    [0].src = "./img/papel.png";

    tesoura = true;
    papel = false;
    pedra = false;
}
//Função realizarJogada
function realizarJogada() {
    //Verificando se uma opção foi selecionada

    try {

    } catch (error) {

    }
    if (tesoura == false && pedra == false && papel == false) {
        let selecionandoPorPrompt = window.prompt("Por favor selecione uma opção!\n1-Pedra 2-Papel 3-Tesoura.")
        if (selecionandoPorPrompt == 1) {
            pedra = true
        } else if (selecionandoPorPrompt == 2) {
            papel = true
        } else {
            tesoura = true
        }

    } else {
        var resultadoSorteio = Math.floor(Math.random() * 3);
    }

    switch (resultadoSorteio) { //Fazer animação de escolha <-----
        case 0:
            resultadoSorteio = 'pedra'
            window.document.getElementById("fotoComputador").src = "./img/pedra.png";
            break;
        case 1:
            resultadoSorteio = 'tesoura'
            window.document.getElementById("fotoComputador").src = "./img/tesoura.png";
            break;
        case 2:
            resultadoSorteio = 'papel'
            window.document.getElementById("fotoComputador").src = "./img/papel.png";
            break;
    }
    if (tesoura == true) {
        window.document.getElementById("fotoUsuario").src = "./img/tesoura.png";
    } else if (papel == true) {
        window.document.getElementById("fotoUsuario").src = "./img/papel.png"
    } else {
        window.document.getElementById("fotoUsuario").src = "./img/pedra.png"
    }

    //Condições que o jogador vence
    if ((pedra == true && resultadoSorteio == 'tesoura') ||
        (tesoura == true && resultadoSorteio == 'papel') ||
        (papel == true && resultadoSorteio == 'pedra')) {
        window.document.getElementById("ganhador").innerHTML = "Você Venceu!";
    }
    //Condições que a máquina vence
    else if ((resultadoSorteio == 'pedra' && tesoura == true) ||
        (resultadoSorteio == 'tesoura' && papel == true) ||
        (resultadoSorteio == 'papel' && pedra == true)) {
        window.document.getElementById("ganhador").innerHTML = "Computador Venceu!";
    }
    //Se nenhum dos dois vencerem
    else if ((resultadoSorteio == 'pedra' && pedra == true) ||
        (resultadoSorteio == 'tesoura' && tesoura == true) ||
        (resultadoSorteio == 'papel' && papel == true)) {
        window.document.getElementById("ganhador").innerHTML = "Houve um Empate"
    }

}
//Animando o testo do vencedor
const textoFlutuante = document.getElementById("ganhador");

let posY = 0;
let direction = 1;

function animateText() {
    posY += direction;
    textoFlutuante.style.transform = `translateY(${posY}px)`;

    if (posY > 20 || posY < -20) {
        direction *= -1; // Inverte a direção quando atinge o limite
    }

    requestAnimationFrame(animateText);
}

animateText();
//Botao de resetar a jogada
function recarregarPagina() {
    window.location.reload();
}