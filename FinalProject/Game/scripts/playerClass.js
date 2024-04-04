class player{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = 10;
    this.friction = 5;
    this.move = false;
  }
//////////MOVEMENT METHODS//////////
  isMoving(){
    if(this.move){
      return true;
    }
  }
  moveLeft(){
    this.move = true;
    this.acc.add(-1);
  }

  moveRight(){
    this.move = true;
    this.acc.add(1);

  }

  moveDown(){
    this.move = true;
    this.acc.add(0, 1);
  }

  moveUp(){
    this.move = true;
    this.acc.add(0, -1);
  }

  controller(){
    if(keyIsDown(65)){
      this.moveLeft();
    }

    if(keyIsDown(68)){
      this.moveRight();
    }

    if(keyIsDown(87)){
      this.moveUp();
    }

    if(keyIsDown(83)){
      this.moveDown();
    }
    this.acc.normalize();
  }


  update(){
    this.controller();
    this.vel = this.acc;
    this.vel.setMag(this.speed)
    this.pos.add(this.vel);
    if(this.isMoving == false){
      this.vel.set();
    }
    this.isMoving = false;
  }
/////////////////////////////////////////

  show(){
    circle(this.pos.x, this.pos.y, 100);
    this.update();
  }
}