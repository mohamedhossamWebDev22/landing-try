window.onscroll = function() {goUp()};
window.onload = function (){typeAnim()}

var btn_up = document.getElementById("up").style,
txt = document.getElementById("txt");

var i = 0,
klam = "Redmi",
speed = 300;

function typeAnim(){
    if (i < klam.length) {
        txt.innerHTML += klam.charAt(i);
        i++;

        setTimeout(typeAnim, speed);
    }
}

function goUp() {
    btn_up.visibility = "visible";
}