let p;
let gameWidth = 1000;
let gameHeight = 1000;

function setup(){
  let canvas = createCanvas(gameWidth, gameHeight);
  canvas.position(100, 15);
  p = new world(0, 0);
  //p.fillEnemies();
}



function draw() {
  background(220);
  strokeWeight(3);
  p.run();
  //console.log(frameRate());
}



class world{
  constructor(){
    this.map = new map(width/2, height/2);
    this.player = new player(gameWidth/2, gameHeight/2, this.map);
    this.enemies = []
    this.enemyCount = 0;
    this.enemySpawnRate = 20;

  }

  // fillEnemies(){
  //   for(let i = 0; i < this.enemyCount; i++){
  //     this.enemies.push(new enemy(random(this.player.spawnPointX), random(this.player.spawnPointY), this.player, this.map));
  //   }
  // }

  run(){
    this.map.show();
    this.player.show();
    let boundary = new Rectangle(gameWidth/2, gameHeight/2, gameWidth, gameHeight);
    let qtree = new QuadTree(boundary, 2);
    for(let e of this.enemies){
      let point = new Point(e.pos.x, e.pos.y, e);
      qtree.insert(point);
    }
    let point = new Point(this.player.pos.x, this.player.pos.y, this.player);
    qtree.insert(point);
    for(let e of this.enemies){
      let range = new Circle(e.pos.x, e.pos.y, e.r*2);
      let points = qtree.query(range);
      for (let point of points){
        let other = point.userData;
        if(e !== other){
          e.enemyCollision(other);
        }
      }
      e.show();
    }

    // for(let i = 0; i < this.enemyCount; i++){
    //   for(let j = 0; j < this.enemyCount; j++){
    //     if(this.enemies[i] !== this.enemies[j]){
    //       this.enemies[i].enemyCollision(this.enemies[j]);
    //     }
    //   }
    //   this.enemies[i].show();
    // }
    this.wallCollision();
    this.map.moveCheck();
    if(frameCount%this.enemySpawnRate == 0){
      this.enemies.push(new enemy(random(this.player.spawnPointX), random(this.player.spawnPointY), this.player, this.map));
    }

    if(this.enemySpawnRate > 0 && frameCount%60 == 0){
      this.enemySpawnRate-=3;
      if(this.enemySpawnRate < 4){
        this.enemySpawnRate = 4;
      }
    }

  }



  //TODO: fix wall collision for circle-square collisions
  wallCollision(){
;   if(this.map.pos.x > this.player.pos.x - this.player.r){
      this.map.pos.x = this.player.pos.x - this.player.r;
      this.player.onWall.x = 1;
    }
    else if(this.map.pos.x + this.map.mapSize - this.player.r < this.player.pos.x){
      this.map.pos.x = this.player.pos.x - this.map.mapSize + this.player.r;
      this.player.onWall.x = 1;
    }
    else{
      this.player.onWall.x = 0;
    }
    if(this.map.pos.y > this.player.pos.y - this.player.r){
      this.map.pos.y = this.player.pos.y - this.player.r;
      this.player.onWall.y = 1;
    }
    else if(this.map.pos.y + this.map.mapSize - this.player.r < this.player.pos.y){
      this.map.pos.y = this.player.pos.y - this.map.mapSize + this.player.r;
      this.player.onWall.y = 1;
    }
    else{
      this.player.onWall.y = 0;
    }
  }
}

function mousePressed(){
  if(p.player.gun.ammo > 0){
    console.log(p.player.gun.facing.heading());
    p.player.gun.fire = true;
    p.player.gun.ammo--;
  }
}