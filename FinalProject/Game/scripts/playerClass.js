class player{
  constructor(x, y, map){
    this.pos = createVector(x, y);
    this.spawnPointX = [this.pos.x - 600, this.pos.x - 800, this.pos.x - 700, this.pos.x + 600, this.pos.x + 800, this.pos.x + 700];
    //this.spawnPointY = [this.pos.x - 600, this.pos.x - 800, this.pos.y - 700, this.pos.y + 600, this.pos.y + 800, this.pos.y + 700];
    this.spawnPointY = [random(this.pos.y - 600), random(this.pos.y - 600), random(this.pos.y - 600), random(this.pos.y + 600), random(this.pos.y + 600), random(this.pos.y + 600)];
    this.facing = createVector(0, 0);
    this.onWall = createVector(0, 0);
    this.r = 33;
    this.gun = new Gun(this.r+10, 0, this.r*.7);
  }

  mouseKB(){
    let mouse = createVector(mouseX, mouseY);
    this.facing = p5.Vector.sub(mouse, this.pos);
    this.facing.normalize();
  }

  show(){
    push();
    rectMode(CENTER);
    translate(this.pos.x, this.pos.y);
    this.mouseKB();
    rotate(this.facing.heading());
    push();
    fill(84, 51, 22);
    translate(this.r*.7, this.r*.5);
    rotate(-.42);
    rect(-7, -3, this.r*10/7, this.r*3/7);
    pop();
    push();
    fill(84, 51, 22);
    translate(this.r*.7, -this.r*.5);
    rotate(.42);
    rect(-7, 3, this.r*10/7, this.r*3/7);
    pop();
    this.gun.show();
    fill(80, 50, 100);
    rect(-7, 0, this.r*.8, this.r*2);
    fill("black")
    square(-7, 0, this.r*1.2);
    line(0, 0, 40, 0);
    fill(0, 0, 255, 70);
    //circle(0, 0, this.r*2);
    pop();
  }
}