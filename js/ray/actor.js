//Actor with a position which casts rays out from all angles
class Actor {
    constructor(rank){
        this.pos = createVector(width/4, height/2); // initial position for Actor
        this.rays = []; //array for storing rays
        this.rank = rank; // used for reflection depth
        this.FOV = 60;  //used for field of view
        this.direction = 0; //used in calculating which direction you are facing.
        this.fidelity = 360;// TODO
        //loop for creating rays
        for(let a = 0; a < 720; a++){
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    //change FOV
   // changeFOV(newFOV){
    //    this.FOV = newFOV;
    //}

    //change position of Actor
    update(x, y, walls){
        
        //check if collides with a wall
        for(let wall of walls){
            //vector of potential location after move
            let myloc = createVector(this.pos.x + x, this.pos.y - y);
            //distances between us and wall start, us and wall end, and wall start and wall end
            const distA = p5.Vector.dist(wall.a, myloc);
            const distB = p5.Vector.dist(wall.b, myloc);
            const distC = p5.Vector.dist(wall.a, wall.b);
            Math.round()
            //if this happens we will be on the line, don't let us move in that dir
            if(Math.round(distA) + Math.round(distB) == Math.round(distC)){ //there's a collision
                //butt the Actor in a direction perp of collision TODO
                let slope = (wall.a.y - wall.b.y) / (wall.a.x - wall.b.x);
                if(slope > 0 && x == 0){ //slope positive, approach from 
                    this.pos.set(this.pos.x, this.pos.y);
                }else if(slope > 0 && y == 0) { //slope pos, approach from
                    this.pos.set(this.pos.x, this.pos.y);
                }else if(slope <= 0 && x == 0){ //slope neg, approach from
                    this.pos.set(this.pos.x, this.pos.y);
                }else if(slope <= 0 && y == 0){ // slope neg approach from
                    this.pos.set(this.pos.x, this.pos.y);
                }
                return;
            }
        }
        //if not, update
        this.pos.set(this.pos.x + x, this.pos.y - y);
    }

    //have actor "look" in the direction of the mouse
    updateDirection(x, y){
        //this.direction = (this.direction + 1)%360; // TODO
        //if I take this.pos, and compare to x,y, I can get a line between this actor and the mouse cursor...
        //get the slope
        let Y = y - this.pos.y;
        let X = x - this.pos.x;
        let degrees = (Math.atan2(Y, X)*(180/Math.PI))- (this.FOV/2);
        if(degrees < 0){
            degrees = 360 + degrees;
        }
        this.direction = degrees;
        //console.log(this.direction);
        //get the angle from the inverse tangent of the slope
    }
    updateDirection2(val){
        if(this.direction+val < 0){
            this.direction = this.direction + 360;
        }
        this.direction = (this.direction + val)%360;
    }

    //draws line between nearest walls and actor if in certain direction
    look(walls){
        //for all of this actors rays 
        let renderScreen = [];
        let splithelper = [];
        let split = false; //boolean to know if we're in split mode in helper
        for (let i = 0; i < this.rays.length; i++){
            //only display ray if it sis within FOV
            let largeDir = (this.direction + this.FOV) % 360;
            let smallDir = this.direction % 360;
            if(this.direction < 360 - this.FOV){
                if(i<=largeDir && i>=smallDir){
                    this.lookHelper(walls, i, renderScreen, split, splithelper);
                }
            }else{
                if(((i>=0 && i<largeDir) || (i>smallDir && i<=360))){
                    split = true;
                    this.lookHelper(walls, i, renderScreen, split, splithelper);
                }
            }
        }
        return renderScreen.concat(splithelper);
    }
    //must pass in walls and i from parent. split and splithelper help with the case of 0 < i < FOV which
    //is handled poorly because wrap around is weird.aw
    lookHelper(walls, i, renderScreen, split, splithelper){
        let ray = this.rays[i];
        //find the pt for that ray
        let closest = null;
        let closewall = null;
        let record = Infinity; //used to keep track of closest
        //for each wall that exists
        for (let wall of walls){
            //find where the ray intersects with that wall (if it does at all)
            const pt = ray.cast(wall);
            //if it does
            if(pt){
                //find the distance to that intersection
                let d = p5.Vector.dist(this.pos, pt);

                //CALCULATING SHAPES NON EUCLIDIAN?
                let heading = ((this.direction) + (this.FOV/2))  * (Math.PI/180);
                const a = ray.dir.heading() - heading;
                d *= cos(a);


                //if that distance is shortest yet seen, record it
                if (d < record){
                    record = d;
                    closest = pt;
                    closewall = wall;
                }
            }
        }
        //if a closest point is found, draw a line to it
        let tempa = [0,0,0];
        if (closest){
            tempa = [closewall.colorr, closewall.colorg, closewall.colorb];
            stroke(tempa);
            line(this.pos.x, this.pos.y, closest.x, closest.y);
            
            //find direction perpendicular to closest wall, calc angle from incoming line to normal, 2x that, create new line in that direction.
            // closewall.a.x  
            // closewall.b.x 
            // closewall.a.y - closewall.b.y
            
        // draw a new actor at that point as well
            // if(this.rank < 1){
            //     //add rank 1 actor at intersection
            //     let r1p = new Particle(this.rank + 1);
            //     r1p.update(closest.x, closest.y);
            //     r1p.show();
            //     r1p.look(walls);
            // }
        }
        //if split is true, and 0 < i < FOV, then those rays need to go at end of renderScreen array
        if(split && i < this.FOV){
            splithelper.push(record, tempa);
        }else{
            renderScreen.push(record, tempa);
        }
        
    }

    //paint the actor itself
    show(){
        fill('red');
        rect(this.pos.x-5, this.pos.y-5, 10, 10, 2);
    }

    
}