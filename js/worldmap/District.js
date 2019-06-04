class District {
    constructor(x, y){
        this.x = x; // position of center of district
        this.y = y; // will scale with canvas height/width TODO
        this.gov = "";
        this.princ = "";
        this.duchy = "";
        this.county = "";
        this.district = "";
        
        this.armies = [];
        this.building = "";
        this.specResiurce = "";

    }
    //draw this district to screen
    show(){
        fill('red');
        rect(this.x-5, this.y-5, 10, 10, 2);
    }
    //
}
