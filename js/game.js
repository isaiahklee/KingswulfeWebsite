/**function theGame () {
    var rez1 = prompt("What's your favorite color?", "");
    var rez2 = prompt("What's your favorite color?", "");
    var rez3 = prompt("What's your favorite color?", "");
    var rez4 = prompt("What's your favorite color?", "");
    var arr = new Array(rez1, rez2, rez3, rez4);
    for(x=0; x < arr.length; x++) {
        console.log("<p>" + arr[x] + "</p>" + "<br />");
    }
}
**/

function boxAuth(value) {
    if(document.playForm.wantsToPlay.checked){
        if(value == "Slithery Snake"){
            window.location.href = 'js-games/snek.html';
        }else if(value == "Ray Stroke"){
            window.location.href = 'js-games/ray.html';
        }else if(value == "Unusual Words"){
            window.location.href = 'unusualwords.php';
        }
    }else{
        alert("You must accept responsibility for playing before you can play.")
    }
}

//drag and drop funcs
/** 
function doFirst(){
    mypicarray = document.getElementsByClassName("picture");
    for(i = 0; i < mypicarray.length; i++){
        mypic = mypicarray[i];
        mypic.addEventListener("dragstart", startDrag, false);
        mypic.addEventListener("dragend", endDrag, false);
        botBox = document.getElementById("bot-drag");
        botBox.addEventListener("dragenter", helper ,false);
        botBox.addEventListener("dragleave", helper ,false);
        botBox.addEventListener("dragover", helper ,false);
        botBox.addEventListener("drop", dropped, false);
    }
}
function helper(e){
    e.preventDefault();
}
function endDrag(e){
    pic = e.target;
    pic.style.visibility = 'hidden';
}
function startDrag(e){
    var code = '<img src="images/coin.png" height=240px width=240px id="picture">';
    e.dataTransfer.setData('Text', code);
}
function dropped(e){
    e.preventDefault();
    botBox.innerHTML += '<img src="images/coin.png" height=240px width=240px id="picture">';
}

window.addEventListener("load", doFirst, false);
**/

//NEW simpler html5 drag and drop
function allowDrop(e) {
    e.preventDefault();
  }
  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }