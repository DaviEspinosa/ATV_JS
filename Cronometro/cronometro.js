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



// Variáveis para controlar o cronômetro
let intervalId = null; // Identificador do intervalo do cronômetro
let isRunning = false; // Indica se o cronômetro está em execução / boolean
let timer = 0; // Atualiza enquanto o cronometro está em execução

// Função para formatar o tempo no formato "horas:minutos:segundos.centésimos"
// Função para formatar o tempo no formato "horas:minutos:segundos.centésimos"
const formatTime = (time) => {
  const centesimos = String(time % 100).padStart(2, '0');//padstart define que cada tempo contenha 2 dígitos
  const segundos = String(Math.floor((time / 100) % 60)).padStart(2, '0');
  const minutos = String(Math.floor((time / 6000) % 60)).padStart(2, '0');
  const horas = String(Math.floor(time / 360000)).padStart(2, '0');
  return `${horas}:${minutos}:${segundos}.${centesimos}`;
};

// Função para atualizar o tempo exibido no cronômetro
const updateTimerDisplay = () => {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatTime(timer);
};

// Função para iniciar ou parar o cronômetro
const toggleTimer = () => {
  const startStopButton = document.getElementById('start-stop');
  if (isRunning) {
    
    clearInterval(intervalId);// Permite o usuário parar o cronômetro 
    startStopButton.textContent = 'Iniciar';
  } else {
    // Iniciar o cronômetro
    intervalId = setInterval(() => {
      timer++;
      updateTimerDisplay();
    }, 10);
    startStopButton.textContent = 'Parar';
  }
  isRunning = !isRunning;
};

// Função para zerar o tempo do cronômetro
const zerarTempo = () => {
  if (!isRunning) {
    timer = 0;
    updateTimerDisplay();
    const markList = document.getElementById('mark-list');
    markList.textContent = ''; // Limpa a lista de marcas
  }
};

// Função para adicionar uma marca de tempo à lista
const mostrarHistorico = () => {
  const markList = document.getElementById('mark-list');
  const markTime = formatTime(timer);
  const markItem = document.createElement('div');
  markItem.textContent = markTime;
  markList.appendChild(markItem);
};

// Adicionar manipuladores de eventos aos botões
document.getElementById('start-stop').addEventListener('click', toggleTimer);
document.getElementById('reset').addEventListener('click', zerarTempo);

