// variaveis
//Mudança de botão "Iniciar" e ir para "Parar"
const btnStartStop = document.querySelector(".start-stop");

btnStartStop.addEventListener("click", () => {
    // Toggle - Se não tiver a classe, ele coloca, se tiver, ele tira
    btnStartStop.classList.toggle("start");
    btnStartStop.classList.toggle("stop");

    if(btnStartStop.classList.contains("start")){
        btnStartStop.innerHTML = "Iniciar";
    }
    else{
        btnStartStop.innerHTML = "Parar";
    }
});

const timerEl = document.getElementById("timer");
const marksList = document.getElementById("markList");

let intervalId = 0; //são do tipo let porque o valor delas irá mudar
let timer = 0;//variavel que armazena o tempo em centésimos de segundos
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor (time / 36000);
    const minutes = Math.floor(time / 36000) /6000;
    const seconds = Math.floor(time / 6000) /100;
    const hundreths =  time % 100;

    return `${hours}:${minutes}:${seconds}.${hundreths}`;
}