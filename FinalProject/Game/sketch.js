let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new player(width/2, height/2);
}

function draw() {
  background(220);
  p.show();
}

class player{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
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
    this.vel.x-=1;
  }

  moveRight(){
    this.move = true;
    this.vel.x+=1;
  }

  moveDown(){
    this.move = true;
    this.vel.y+=1;
  }

  moveUp(){
    this.move = true;
    this.vel.y-=1;
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

    this.vel.x = lerp(this.vel.x, 0, .9);
    this.vel.y = lerp(this.vel.y, 0, .9);
  }


  update(){
    this.controller();
    console.log(this.vel);
    if(this.isMoving()){
      this.vel.normalize();
    // console.log(this.vel);
    this.vel.setMag(this.speed);
    //this.pos.add(this.vel);
    }
    this.pos.add(this.vel);
    //this.vel.set();
    //this.vel.x = lerp(this.vel.x, 0, .05);
    //this.vel.y = lerp(this.vel.y, 0, .05);
    //console.log(this.vel);
    //console.log(this.vel);
    this.move = false;
  }
/////////////////////////////////////////

  show(){
    circle(this.pos.x, this.pos.y, 100);
    this.update();
  }
}