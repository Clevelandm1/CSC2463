class enemy{
  constructor(x, y, player, map){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = 7;
    this.player = player;
    this.map = map;
    this.facing = createVector(0, 0);
  }

  follow(){
    this.acc = p5.Vector.sub(this.player.pos, this.pos);
    this.acc.normalize();
    this.vel = this.acc;
    this.vel.setMag(this.speed);
  }

  update(){
    this.follow();
    this.pos.add(this.vel);

    if(this.player.onWall.x == 0){
        this.pos.x+=this.map.vel.x;
    }

    if(this.player.onWall.y == 0){
        this.pos.y+=this.map.vel.y;
    }

    if(this.map.isMoving == false){
      this.map.vel.set();
    }
    this.map.isMoving = false;
  }

  face(){
    //let p = createVector(this.player.pos.x, this.player.pos.y);
    this.facing = p5.Vector.sub(this.player.pos, this.pos);
    this.facing.normalize();
  }

  rotation(){
    rectMode(CENTER);
    translate(this.pos.x, this.pos.y);
    rotate(this.facing.heading());
  }

  show(){
    this.face();
    fill(170, 0, 0);
    push()
    this.rotation()
    square(0, 0, 40);
    pop();
    this.update();

  }
}