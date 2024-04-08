class enemy{
  constructor(x, y, player, map){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = .27;
    this.player = player;
    this.map = map;
    this.facing = createVector(0, 0);
    this.playerCollisionHelper = 6;
    this.hitboxScale = 1.3;
    this.r = 20*this.hitboxScale;
  }

  follow(){
    this.acc = p5.Vector.sub(this.player.pos, this.pos);
    this.acc.normalize();
    this.vel = this.acc;
    let deltaX = this.speed * deltaTime;
    this.vel.setMag(deltaX);
  }

  update(){
    this.follow();

    if(this.player.onWall.x == 0){
        this.pos.x+=this.map.vel.x;
    }

    if(this.player.onWall.y == 0){
        this.pos.y+=this.map.vel.y;
    }
    this.collision();
    this.pos.add(this.vel);
  }
  enemyCollision(enemy){
    let dist = p5.Vector.dist(enemy.pos, this.pos);
    if(dist <= this.r + enemy.r){
      let direction = p5.Vector.sub(enemy.pos, this.pos);
      direction.setMag(dist - this.r - enemy.r);
      this.pos.add(direction);
    }
  }
  collision(){
    let dist = p5.Vector.dist(this.player.pos, this.pos);
    if(dist <= this.r + this.player.r){
      let direction = p5.Vector.sub(this.player.pos, this.pos);
      direction.setMag(dist - this.r - this.player.r);
      this.pos.add(direction);
    }
  }

  face(){
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
    
    push()
    this.rotation()
    fill(0, 100, 0);
    rect(this.r*2/3/this.hitboxScale, this.r*1.2/this.hitboxScale, 2*this.r/this.hitboxScale, .6*this.r/this.hitboxScale);
    rect(this.r*2/3/this.hitboxScale, -this.r*1.2/this.hitboxScale, 2*this.r/this.hitboxScale, .6*this.r/this.hitboxScale);
    fill(38, 20, 9);
    square(0, 0, this.r*2/this.hitboxScale);
    fill(170, 0, 0, 80);
    //circle(0, 0, this.r*2);
    line(0, 0, 30, 0);
    pop();
    this.update();

  }
}