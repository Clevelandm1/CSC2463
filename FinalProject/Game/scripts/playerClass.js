class player2{
  constructor(x, y){
    this.pos = createVector(x, y);
  }

  show(){
    fill('black');
    circle(this.pos.x, this.pos.y, 50);
  }
}