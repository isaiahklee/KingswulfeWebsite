let canvasH = 800;
let canvasW = 800;
let board = [];
let boardsize = 20;
let scale = canvasH/boardsize;
let snek;
let framerate = 4;
let inertia = 0;
let totalfood = 4;
let foodarray = [];

function setup(){
    //noCursor();
    frameRate(framerate);
    createCanvas(canvasW, canvasH);

    //create board
    for(let i = 0; i < boardsize; i++){
        let subboard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        board.push(subboard);
    }

    //instantiate snake
    //TODO
    //board[0][0] = 1;
    snek = new snakebody(5, 5, boardsize);
}

function draw(){
    background(120);
    
    //draw grid
    for(let i = 0; i < boardsize; i++){
        for(let j = 0; j < boardsize; j++){
            stroke(255);
            noFill();
            rect(i*scale, j*scale, scale, scale);
        } 
    }

    //update move
    updateMovement();

    //draw snake and food
    makefood();

    for(let i = 0; i < snek.bodynodes.length; i++){
        fill(255);
        ellipse(snek.bodynodes[i].x*(canvasH/boardsize)+20, snek.bodynodes[i].y*(canvasH/boardsize)+20, 25, 25);
    }
    
    //draw mouse on screen and print its location to console
    //let x2 = map(mouseX, 0, canvasW, 0, canvasW);
    //let y2 = map(mouseY, 0, canvasH, 0, canvasH);
    //ellipse(x2, y2, 5, 5);
    
}

function updateMovement(){
    if(keyIsDown(65) || (!keyIsPressed && inertia == 0)){ //this is the
        let slitherdither = snek.slither(-1, 0);
        if(slitherdither == -1){
            gameend(false);
        }else if(slitherdither != 2){
            inertia = 0;
        }
    }
    else if(keyIsDown(68) || (!keyIsPressed && inertia == 1)){
        let slitherdither = snek.slither(1, 0);
        if(slitherdither == -1){
            gameend(false);
        }else if(slitherdither != 2){
            inertia = 1;
        }
    }
    else if(keyIsDown(87) || (!keyIsPressed && inertia == 2)){
        let slitherdither = snek.slither(0, -1);
        if(slitherdither == -1){
            gameend(false);
        }else if(slitherdither != 2){
            inertia = 2;
        }
    }
    else if(keyIsDown(83) || (!keyIsPressed && inertia == 3)){
        let slitherdither = snek.slither(0, 1);
        if(slitherdither == -1){
            gameend(false);
        }else if(slitherdither != 2){
            inertia = 3;
        }
    }
    dideat();
}

function dideat(){
    //checks if the snake head is on food.
    for(let i = 0; i < foodarray.length; i++){
        if(foodarray[i].x == snek.bodynodes[0].x && foodarray[i].y == snek.bodynodes[0].y){
            snek.add();
            //console.log("et fud");
            delete foodarray[i];
        }
    }
}

function makefood(){
    //console.log(foodarray);
    //console.log(foodarray.length);
    //make this work if any elements are null?
    for(let i = 0; i < totalfood; i++){
        if(foodarray[i] == null){
                foodarray[i] = new food(parseInt(Math.random()*boardsize), parseInt(Math.random()*boardsize));
                //console.log(foodarray[i]);
        }
    }
    for(let i = 0; i < foodarray.length; i++){
        push();
        stroke(0);
        fill(0);
        ellipse(foodarray[i].x*(canvasH/boardsize)+20, foodarray[i].y*(canvasH/boardsize)+20, 25, 25);
        pop();
        //console.log(foodarray[i]);
    }
}

function gameend(bool){
    textSize(32);
    if(bool){
        text("YOU WIN", canvasH/2, canvasW/2);
        textAlign(CENTER);
    }
    text("YOU LOSE", canvasH/2, canvasW/2);
    textAlign(CENTER);
    snek.reset();
}