class Gun{
    constructor(x, y, size, facing){
        this.x = x;
        this.y = y;
        this.size = size;
        this.facing = createVector(0, 0);
        this.ammo = 50;
        this.fire = false;
    }

    show(){
        push();
        rectMode(CENTER);
        fill(50, 50, 50);
        rect(0+this.x, 0+this.y, this.size*1.7, this.size/2);
        if(this.fire == true){
            this.fired();
        }
        pop();
        this.fire = false;
    }

    mouseK(){
    let mouse = createVector(mouseX, mouseY);
    this.facing = p5.Vector.sub(mouse, createVector(width/2, height/2));
    this.facing.normalize();
  }

    fired(){
        push();
        fill(200, 200, 0);
        translate(0+this.x, 0+this.y);
        this.mouseK();
        rotate(this.facing.heading());
        circle(0, 0, 20);
        pop();
    }
}