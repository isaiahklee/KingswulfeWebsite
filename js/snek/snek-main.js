let canvasH = 800;
let canvasW = 800;
let boardsize = 20;
let scale = canvasH/boardsize;
let snek;
let framerate = 4;
let inertia = 0;
let totalfood = 6;
let foodarray = [];
let pause = true;

function setup(){
    //noCursor();
    frameRate(framerate);
    createCanvas(canvasW, canvasH).parent('snek-canvas');
    
    //instantiate snake
    snek = new snakebody(boardsize/2, boardsize/2, boardsize);

    updateBoard();
    textSize(32);
    noFill();
    textAlign(CENTER);
    text("PRESS any key to start", canvasH/2, canvasW/2);
    
}

function updateBoard(){
    //set up so pause works
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
}

function draw(){
    if(pause == false){
        updateBoard();
    }else{
        //if it's paused the game will hang here. stops if any key is pressed
        if(keyIsPressed){
            pause = false;
        }
    }
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
        if(foodarray[i] != null){
            if(foodarray[i].x == snek.bodynodes[0].x && foodarray[i].y == snek.bodynodes[0].y){
                snek.add();
                delete foodarray[i];
            }
        }
    }
}

function makefood(){
    //if any elements are null, make a new food piece for that spot.
    loop1:
        for(let i = 0; i < totalfood; i++){
            if(foodarray[i] == null){
                //if a spawn position is occluded by another food, or snake body, spawn in open area...
                while(foodarray[i] == null){
                    //make an array of acceptable food locations. board - snek body locations. 
                    let spawnArray = [];
                    for(let p = 0; p < boardsize; p++){
                        let subboard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        spawnArray.push(subboard);
                    }
                    for(let j = 0; j < snek.bodynodes.length; j++){
                        //for each bodynode, mark it on spawnArray 2d array,
                        spawnArray[snek.bodynodes[j].x][snek.bodynodes[j].y] = 1;
                    }
                    //it's also unacceptable to spawn food on top of food
                    for(let j = 0; j < foodarray.length; j++){
                        if(j != i){
                            if(foodarray[j] != null){
                                spawnArray[foodarray[j].x][foodarray[j].y] = 1;
                            }
                        }
                    }
                    //check if there are any zero's, if there are, break
                    let allfull = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for(let j = 0; j < boardsize; j++){
                        if(!spawnArray[j].includes(0)){
                            allfull[j] = 1;
                        }
                    }
                    if(!allfull.includes(0)){
                        //then the board is full and ready for nulls
                        console.log(allfull);
                        break loop1;
                    }
                    //spawn food only in zero positions of spawnArray
                    let newX = parseInt(Math.random()*boardsize);
                    let newY = parseInt(Math.random()*boardsize);
                    while(spawnArray[newX][newY] == 1){
                        newX = parseInt(Math.random()*boardsize);
                        newY = parseInt(Math.random()*boardsize); 
                    }
                    foodarray[i] = new food(newX, newY);
                }
            }
        }
    let count = 0;
    for(let i = 0; i < foodarray.length; i++){
        if(foodarray[i] != null){
            push();
            stroke(0);
            fill(0);
            ellipse(foodarray[i].x*(canvasH/boardsize)+20, foodarray[i].y*(canvasH/boardsize)+20, 25, 25);
            pop();
            //console.log(foodarray[i]);
        }else{
            count++;
        }
    }
    
    if(count == foodarray.length){
        noLoop();
        gameend(true);
    }
}

function gameend(bool){
    console.log("gameend called with: " + bool);
    textSize(32);
    if(bool){
        textAlign(CENTER);
        text("YOU WIN", canvasH/2, canvasW/2);
        snek.reset();
        pause = true;
        noLoop();
        //reset the game by recalling setup after 3 seconds of you lost screen
        sleep(10000).then(() => {
            // Do something after the sleep!
            setup();
            loop();
        });  
    }else{
        textAlign(CENTER);
        text("YOU LOST", canvasH/2, canvasW/2);
        snek.reset();
        pause = true;
        noLoop();
        //reset the game by recalling setup after 3 seconds of you lost screen
        sleep(3000).then(() => {
            // Do something after the sleep!
            setup();
            loop();
        });   
    } 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}