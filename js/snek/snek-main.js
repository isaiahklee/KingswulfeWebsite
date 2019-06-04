const x = document.getElementById("game-board");
const canvas = x.getContext('2d');
window.addEventListener("mousemove", drawLoop, false);

function drawLoop(e){
    var xPos = e.clientX;
    var yPos = e.clientY;
    canvas.fillStyle = "white";
    canvas.fillRect(xPos-105, yPos-25, 10, 10);
}