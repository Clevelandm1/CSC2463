let p;
let gameWidth = 800;
let gameHeight = 800;

function setup(){
  canvas = createCanvas(gameWidth, gameHeight);
  canvas.position(100, 100);
  p = new world(0, 0);
  p.fillEnemies();
}

function draw() {
  background(220);
  strokeWeight(3);
  p.run();
}



class world{
  constructor(){
    this.map = new map(width/2, height/2);
    this.player = new player(gameWidth/2, gameHeight/2, this.map);
    this.enemies = []
    this.enemy = new enemy(random(this.player.spawnPointX), random(this.player.spawnPointY), this.player, this.map);
    this.enemyCount = 500;

  }

  fillEnemies(){
    for(let i = 0; i < this.enemyCount; i++){
      this.enemies.push(new enemy(random(this.player.spawnPointX), random(this.player.spawnPointY), this.player, this.map));
    }
  }

  run(){
    this.map.show();
    this.enemy.show();
    this.player.show();
    for(let i = 0; i < this.enemyCount; i++){
      this.enemies[i].show();
    }
    this.wallCollision();
    this.map.moveCheck();
  }

  wallCollision(){
;   if(this.map.pos.x > this.player.pos.x - 30){
      this.map.pos.x = this.player.pos.x - 30;
      this.player.onWall.x = 1;
    }
    else if(this.map.pos.x + this.map.mapSize - 30 < this.player.pos.x){
      this.map.pos.x = this.player.pos.x - this.map.mapSize + 30;
      this.player.onWall.x = 1;
    }
    else{
      this.player.onWall.x = 0;
    }
    if(this.map.pos.y > this.player.pos.y - 30){
      this.map.pos.y = this.player.pos.y - 30;
      this.player.onWall.y = 1;
    }
    else if(this.map.pos.y + this.map.mapSize - 30 < this.player.pos.y){
      this.map.pos.y = this.player.pos.y - this.map.mapSize + 30;
      this.player.onWall.y = 1;
    }
    else{
      this.player.onWall.y = 0;
    }
  }
}
