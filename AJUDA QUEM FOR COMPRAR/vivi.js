var yesButton = document.getElementsByClassName("yesbutton")
var noButton = document.getElementsByClassName("nobutton")

yesButton.addEventListener('click', changeColor())

function changeColor(){
    yesButton.innerHTML = "ok"
}

function activateCalculator(){
    var answer = document.getElementById("answer")
    if(document.getElementById('yesbutton').checked && document.getElementById('yesbutton1').checked && document.getElementById('yesbutton2').checked && document.getElementById('yesbutton3').checked && document.getElementById('yesbutton4').checked){
        answer.innerHTML = "Você pode comprar! &#129321;";
    } else {
        answer.innerHTML = "Você NÃO pode comprar! &#128555;";
    }
}

