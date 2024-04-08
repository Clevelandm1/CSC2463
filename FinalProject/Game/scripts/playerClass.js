class player{
  constructor(x, y, map){
    this.pos = createVector(x, y);
    this.spawnPointX = [this.pos.x - 600, this.pos.x - 800, this.pos.x - 700, this.pos.x + 600, this.pos.x + 800, this.pos.x + 700];
    //this.spawnPointY = [this.pos.x - 600, this.pos.x - 800, this.pos.y - 700, this.pos.y + 600, this.pos.y + 800, this.pos.y + 700];
    this.spawnPointY = [random(this.pos.y - 600), random(this.pos.y - 600), random(this.pos.y - 600), random(this.pos.y + 600), random(this.pos.y + 600), random(this.pos.y + 600)];
    this.facing = createVector(0, 0);
    this.onWall = createVector(0, 0);
    this.r = 35;
  }

  mouseKB(){
    let mouse = createVector(mouseX, mouseY);
    this.facing = p5.Vector.sub(mouse, this.pos);
    this.facing.normalize();
  }

  show(){
    push();
    fill(0, 0, 170);
    translate(this.pos.x, this.pos.y);
    this.mouseKB();
    rotate(this.facing.heading());
    circle(0, 0, this.r*2);
    line(0, 0, 40, 0);
    pop();
  }
}