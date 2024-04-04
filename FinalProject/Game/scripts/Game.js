let p;
let gameWidth = 800;
let gameHeight = 800;

function setup() {
  createCanvas(gameWidth, gameHeight);
  p = new world(0, 0);
}

function draw() {
  background(220);
  p.run();
}



class world{
  constructor(){
    this.map = new map(width/2, height/2);
    this.player2 = new player2(gameWidth/2, gameHeight/2);
    this.enemy = new enemy(this.player2.pos.x - 600, this.player2.pos.y - 600, this.player2, this.map);
  }

  run(){
    this.map.show();
    this.enemy.show();
    this.player2.show();
  }
}
