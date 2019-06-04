//local vars?
let mapimg = null;
let canvasH = 800;
let canvasW = 1600;
let segments = []; //var to hold each of the district objects
                //I do this rather than just plain json object because this way I can 
                //use the functions I've defined alongside the object.


//fucntion which sets up the canvas and data structures used to draw the map.
function setup(){
    noCursor();
    //create a canvas to draw on
    
    loadImage('../js/worldmap/G4.png', img => {
        mapimg = img;
        canvasH = mapimg.height;
        canvasW = mapimg.width;
        createCanvas(canvasW, canvasH);
    });
    
    //get json data and load it into dist objects
    let myJSON = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myJSON = JSON.parse(this.responseText);
            console.log(myJSON.districts);
            //load the districts for the given map, taking the location data from an xml file
            for(let i = 0; i < myJSON.districts.length; i++){
                segments[i] = new District(myJSON.districts[i].x, myJSON.districts[i].y);
            }
        }
    };
    xmlhttp.open("GET", "../js/worldmap/districts.json", true);
    xmlhttp.send();
}

//draw the background black. paint and update frames and stuff.
function draw(){
    //background(0); //blackground
    if(mapimg){
        image(mapimg, 0, 0);
    }
    segments.forEach(element => {
        element.show();
    });

    //draw mouse on screen and print its location to console
    let x2 = map(mouseX, 0, canvasW, 0, canvasW);
    let y2 = map(mouseY, 0, canvasH, 0, canvasH);
    ellipse(x2, y2, 5, 5);
    textSize(32);
    text("x:" + String(Math.round(mouseX)) + " y:" + String(Math.round(mouseY)), 10, 30);
}