//document.write("javascript");

function funky() {
    alert("ouch!");
}

function submit(username, password) {
    console.log(username, password);
}

function playSound() {
   // alert("On Press of "  + tuneName);
    var audio = new Audio("sound/oof.mp3");
    audio.play();
    console.log(audio.volume);
   // var pro = prompt("Lik dis if you cri evrtim:", ""); //note, prompt halts other code from executing until done. 
   // console.log(pro);
}

//object testing 
function Fridge(food, age) {
    this.food = food;
    this.age = age;
    this.isGood = isGood;
}
myFridge = {food:"pizza", age:2, isGood:isGood};
function isGood() {
    var ret = true;
    if(this.age > 3){
        ret = false;
    }
    return ret;
}
function checkFridge(){
    var fridge = new Fridge("cheese", 1999);
   // Document.write(fridge.foods + fridge.age);
    console.log(fridge.food + fridge.age);
    console.log(myFridge.food + myFridge.age);
    console.log(fridge.isGood());
    console.log(myFridge.isGood());
}

//copyright year updater
function cpyYear(){
    var cpyText = document.getElementById('footer-copyright-text');
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    cpyText.innerHTML = "Copyright Kingswulfe " + year;
}
cpyYear();