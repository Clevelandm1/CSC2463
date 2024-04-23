class bullet{
    constructor(dir){
        this.pos = createVector(60, 0);
        this.vel = createVector(1, 0);
        this.dir = dir;
        this.hasDir = false;
    }

    update(){
        this.pos.add(this.vel.setMag(10));
    }

    show(){
        push();
        this.update();
        translate(width/2, height/2);
        console.log(this.dir)
        rotate(this.dir.heading());
        fill('y');
        circle(this.pos.x, this.pos.y, 10);
        pop();
    }
}