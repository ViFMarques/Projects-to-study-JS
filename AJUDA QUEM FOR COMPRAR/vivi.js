var yesButton = document.getElementsByClassName("yesbutton")
var noButton = document.getElementsByClassName("nobutton")

yesButton.addEventListener('click', changeColor())

function changeColor(){
    yesButton.innerHTML = "ok"
}

function activateCalculator(){
    if(document.getElementById('yesbutton').checked && document.getElementById('yesbutton1').checked && document.getElementById('yesbutton2').checked && document.getElementById('yesbutton3').checked && document.getElementById('yesbutton4').checked){
        document.getElementById("answer").innerHTML = "Você pode comprar! &#129321;";
    } else {
        document.getElementById("answer").innerHTML = "Você não pode comprar! &#128555;";
    }
}

