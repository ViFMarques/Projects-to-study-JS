var ligar = document.getElementById('turnOn');
var desligar = document.getElementById('turnOff');
var lamp = document.getElementById('lamp');

turnOn.addEventListener('click', lampOn); 
lamp.addEventListener('mousemove', lampOn);

function lampOn() {
    if ( !islampbroken() ) {
        lamp.src = "img/ligada.jpg"; 
    }
}

turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseleave', lampOff);

function lampOff() {
    if (!islampbroken()) {
        lamp.src = "img/desligada.jpg";   
    } 
}

lamp.addEventListener('dblclick', lampbroken);

function lampbroken() {
  
    lamp.src = "img/quebrada.jpg";
}

function islampbroken() {

  return lamp.src.indexOf ('quebrada') > -1 ; 
}