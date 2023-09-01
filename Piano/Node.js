var tecla = document.querySelectorAll('.tc');
var somNotas =document.getElementById('somNotas');

tecla.forEach((t)=>{
    t.addEventListener('click', ()=> {
        somNotas.src = 'Sons/' + t.id + '.mp3';
        somNotas.play();
        console.log(t.id);
    });
});