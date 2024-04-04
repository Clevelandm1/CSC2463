class enemy{
  constructor(x, y, player, map){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = 7;
    this.player = player;
    this.map = map;
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
    //console.log(this.map.acc);
    this.pos.add(this.map.vel);
    if(this.map.isMoving == false){
      this.map.vel.set();
    }
    this.map.isMoving = false;
  }

  show(){
    fill(170, 0, 0)
    square(this.pos.x, this.pos.y, 40);
    this.update();
  }
}