class map{
  constructor(){
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = .54;
    this.playerFacing = createVector(0, 0);
    this.mapSize = 3000;
    this.velForBullets = createVector(0, 0);
  }

  isMoving(){
    if(this.move){
      return true;
    }
  }

  moveCheck(){
    if(this.isMoving == false){
      this.vel.set();
    }
    this.isMoving = false;
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
      this.moveRight();
    }

    if(keyIsDown(68)){
      this.moveLeft();
    }

    if(keyIsDown(87)){
      this.moveDown();
    }

    if(keyIsDown(83)){
      this.moveUp();
    }
    this.acc.normalize();
  }


  update(){
    this.controller();
    this.vel = this.acc;
    this.playerFacing = this.acc;
    let deltaX = deltaTime * this.speed;
    this.vel.setMag(deltaX);
    this.velForBullets = this.vel;
    this.pos.add(this.vel);
  }
/////////////////////////////////////////

  show(){
    fill('gray');
    square(this.pos.x, this.pos.y, this.mapSize);
    this.update();
  }
}