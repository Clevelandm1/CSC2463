class enemy{
  constructor(x, y, player, map){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = 5;
    this.player = player;
    this.map = map;
    this.facing = createVector(0, 0);
    this.playerCollisionHelper = 6;
    this.size = 40;
  }

  follow(){
    this.acc = p5.Vector.sub(this.player.pos, this.pos);
    this.acc.normalize();
    this.vel = this.acc;
    this.vel.setMag(this.speed);
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
  }
  enemyCollision(enemy){
    if(this.pos.x + this.size/2 > enemy.pos.x - this.size/2 && this.pos.x - this.size/2 < enemy.pos.x + this.size/2 && this.pos.y + this.size/2 > enemy.pos.y - this.size/2 && this.pos.y - this.size/2 < enemy.pos.y + this.size/2){
      let distance = p5.Vector.sub(enemy.pos, this.pos);
      distance.setMag(3);
      this.pos.sub(distance);
      
    }

  }
  collision(){
    if(this.pos.x + this.player.size/2 - this.playerCollisionHelper > this.player.pos.x - this.player.size/2 + this.playerCollisionHelper && this.pos.x - this.player.size/2 + this.playerCollisionHelper < this.player.pos.x + this.player.size/2 - this.playerCollisionHelper && this.pos.y + this.player.size/2 - this.playerCollisionHelper > this.player.pos.y - this.player.size/2 + this.playerCollisionHelper && this.pos.y - this.player.size/2 + this.playerCollisionHelper < this.player.pos.y + this.player.size/2 - this.playerCollisionHelper){
        this.vel.mult(-1);
    }
    this.pos.add(this.vel);
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
    square(0, 0, this.size);
    pop();
    this.update();

  }
}