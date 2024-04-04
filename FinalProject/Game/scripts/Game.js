let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new world(0, 0);
}

function draw() {
  background(220);
  p.run();
}



class world{
  constructor(x, y){
    this.player = new player(width/2, height/2);
    this.enemy = new enemy(50, 50, this.player);
  }

  run(){
    this.player.show();
    this.enemy.show();
  }
}

class enemy{
  constructor(x, y, player){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = 5;
    this.player = player;
  }

  function(){
    // let playerPos = createVector(this.player.pos.x, this.player.pos.y);
    this.acc = p5.Vector.sub(this.player.pos, this.pos);
    this.acc.normalize();
    console.log(this.acc);
    this.vel = this.acc;
    this.vel.setMag(this.speed);
  }

  update(){
    this.function();
    this.pos.add(this.vel);
  }

  show(){
    square(this.pos.x, this.pos.y, 40);
    this.update();
  }
}