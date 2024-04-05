class player{
  constructor(x, y, map){
    this.pos = createVector(x, y);
    this.spawnPointX = [this.pos.x - 600, this.pos.x + 600];
    this.spawnPointY = [this.pos.y - 600, this.pos.y + 600];
    this.facing = createVector(0, 0);
    this.onWall = createVector(0, 0);;
  }

  mouseKB(){
    let mouse = createVector(mouseX, mouseY);
    this.facing = p5.Vector.sub(mouse, this.pos);
    this.facing.normalize();
  }

  show(){
    this.mouseKB();
    push();


    rectMode(CENTER);
    fill(0, 0, 170);
    translate(this.pos.x, this.pos.y);
    rotate(this.facing.heading());
    square(0, 0, 50);
    pop();
  }
}