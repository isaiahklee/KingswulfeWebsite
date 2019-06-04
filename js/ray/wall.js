//use to draw lines in canvas

class Wall {
    constructor(x1, y1, x2, y2){
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.colorr = Math.random()*255;
        this.colorg = Math.random()*255;
        this.colorb = Math.random()*255;
    }

    show(mode){
        if(mode == 1){
            this.colorb = Math.random()*255;
            this.colorg = Math.random()*255;
            this.colorb = Math.random()*255;
        }
        stroke(this.colorr, this.colorg, this.colorb);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}