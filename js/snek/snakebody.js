//class for each node of the snakes body
class bodynode{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
//class for a particle of food
class food{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
//class that keeps track of all food, bodynodes, and their position and interaction on the board
class snakebody{
    constructor(x, y, brdsize){
        this.brdsize = brdsize;
        //array to hold all body nodes
        let body = new bodynode(x, y)
        this.bodynodes = [];
        this.bodynodes.push(body);
    }
    add(){
        //add a new node when eat
        this.bodynodes.push(new bodynode(this.bodynodes[this.bodynodes.length-1].x, this.bodynodes[this.bodynodes.length-1].y));
    }
    slither(x, y){
        //bounds check
        if(this.bodynodes[0].x + x >= this.brdsize || this.bodynodes[0].x + x < 0 || this.bodynodes[0].y + y >= this.brdsize || this.bodynodes[0].y + y < 0){
            //game ends!
            return -1;
        }
        //can't move into bodynode[1]
        if(this.bodynodes[1]){
            if(this.bodynodes[1].x == this.bodynodes[0].x + x && this.bodynodes[1].y == this.bodynodes[0].y + y){
                return 2;
            }
        }
        //new head
        let newhead = new bodynode((this.bodynodes[0].x + x), (this.bodynodes[0].y + y));
        //move the head by removing tail, and adding new head.
        this.bodynodes.pop();
        this.bodynodes.unshift(newhead);
    }
    draw(){
        ellipse(this.x*(800/this.brdsize)+5, this.y*(800/this.brdsize)+5, 5, 5);
    }
    reset(){
        let head = this.bodynodes[0];
        delete this.bodynodes;
        this.bodynodes = [head]; 
    }
}