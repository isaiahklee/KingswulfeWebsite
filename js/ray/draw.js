//2d raycasting experimentation

let walls = [];
let ray;
let actors = [];
let MoveSpeed = 2;
let canvasH = 400;
let canvasW = 400;
let mode = 0;
let turnMode = 0;
//let FOVSlider;

function setup(){
    //create a canvas to draw on
    createCanvas(canvasH*3, canvasW);

    //create various walls within the canvas
    for(let i = 0; i < 4; i++){
        let x1 = random(canvasW);
        let x2 = random(canvasW);
        let y1 = random(canvasH);
        let y2 = random(canvasH);
        walls[i] = new Wall(x1, y1, x2, y2);
    }

    //make the boundaries for the canvas
    walls.push(new Wall(5, 5, canvasW-5, 5)); //top
    walls.push(new Wall(canvasW-5, 5, canvasW-5, canvasH-5)); //right
    walls.push(new Wall(canvasW-5, canvasH-5, 5, canvasH-5)); //bot
    walls.push(new Wall(5, canvasH-5, 5, 5)); //left

    //create the actor object
    actors.push(new Actor(0));
   // FOVSlider = p5.Element.createSlider(0, 360, 60, 1);
  //  FOVSlider.input(changeFOV);
}

//function changeFOV(changeFOV){
//    actors[0].changeFOV(changeFOV);
//}

function draw(){
    background(0); //blackground
    for(let wall of walls){
        wall.show(mode); //draw our wall to screen
    }
    //actors[0].update(mouseX, mouseY); //move actor with mouse
    updateMovement();
    if(turnMode == 1){
        actors[0].updateDirection(mouseX, mouseY); //look with mouse
    }else{
        updateDirection2(); //look with Q and E
    }
    actors[0].show(); //draw the actor
    const renderScreen = actors[0].look(walls); //look for walls actor can 'see'


    const w = canvasH*4/renderScreen.length/2;
    push();
    translate(canvasH, 0);
    for(let i = 0; i < renderScreen.length; i = i + 2){
        noStroke();
        let lumin = map(renderScreen[i], 0, canvasH, 1, 255); //determines brightness falloff with distance
        let rectHeight = map(renderScreen[i], 0, canvasW, 0, canvasW); //determines height falloff with distance
        rectHeight = (1/rectHeight)*(canvasW+1)*100;
        lumin = (1/lumin)*255*100;
        const m1 = map(mouseX, 0, canvasW, 0, 255); //
        const m2 = map(mouseY, 0, canvasH, 0, 255); //
        colorr = renderScreen[i+1][0]; //gets the red
        colorg = renderScreen[i+1][1]; //gets the green
        colorb = renderScreen[i+1][2]; //gets the blue
        fill(colorr, colorg, colorb, lumin); //determines rectangle color
        rectMode(CENTER); //magic
        rect((i*w), canvasW/2, w + 6, rectHeight, 5); //draw the rectangle (x, y, w, h, rounding)
    }
    pop();

    // ray.show(); //draw the ray to screen
    // ray.lookAt(mouseX, mouseY); //ray looks in dir of mouse

    //draw little ellipse where ray intersects with wall
    //let pt = ray.cast(wall);
    //if(pt){
    //    fill(255);
    //    ellipse(pt.x, pt.y, 8, 8);
    //}
}
function updateDirection2(){
    if(keyIsDown(81)){
        actors[0].updateDirection2(-1);
    }
    if(keyIsDown(69)){
        actors[0].updateDirection2(1);
    }
}
function updateMovement(){
    if(keyIsDown(65)){
        actors[0].update(-MoveSpeed, 0, walls);
    }
    if(keyIsDown(68)){
        actors[0].update(MoveSpeed, 0, walls);
    }
    if(keyIsDown(87)){
        actors[0].update(0, MoveSpeed, walls);
    }
    if(keyIsDown(83)){
        actors[0].update(0, -MoveSpeed, walls);
    }
}

function modeButton(){
    if(document.getElementById("wantsToPlay").checked){
        mode = (mode+1)%2;
    }else{
        alert("Check the Epilepsy Warning box to stop this Epilepsy Warning pop-up.")
    }
}
function toggleTurning(){
    turnMode = (turnMode+1)%2;
}