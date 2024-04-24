class bullet{
    constructor(dir){
        this.pos = createVector(60, 0);
        this.vel = createVector(1, 0);
        this.dir = dir;
        this.hasDir = false;
    }

    update(){
        this.pos.add(this.vel.setMag(20));
        //console.log(p.map.velForBullets);
    }

    show(){
        push();
        //this.update();
        this.pos.x -= p.map.velForBullets.y;
        // this.pos.y -= p.map.velForBullets.x;
        translate(width/2, height/2);
        rotate(this.dir.heading());
        fill('y');
        circle(this.pos.x, this.pos.y, 10);
        rotate(60);
        pop();
        //this.pos.x -= p.map.velForBullets.y;
        // this.pos.y -= p.map.velForBullets.x;
    }
}