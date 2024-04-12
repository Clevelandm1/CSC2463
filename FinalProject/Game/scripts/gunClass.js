class Gun{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    show(){
        push();
        rectMode(CENTER);
        fill(50, 50, 50);
        rect(0+this.x, 0+this.y, this.size*1.7, this.size/2);
        pop();
    }
}