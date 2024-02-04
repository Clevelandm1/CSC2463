let img;
let wood;
let Roach = [];
let bugs = [];
let count = 0;

function preload(){
   img = loadImage('libraries/Roach.png');
   wood = loadImage('libraries/Untitled_Artwork.png');
}

function setup(){
   createCanvas(windowWidth, windowHeight);
   rectMode(CENTER);
   imageMode(CENTER);
   frameRate(30);
   let x = 0;
   for(let i = 0; i < 10; i++){
      Roach[i] = img.get(x, 0, 96, 100);
      x += 100;
   }

   for(let i = 0; i < 40; i++){
      bugs[i] = new bug(random(100, width-100), random(100, height-100));
      //bugs[i] = new bug(random(110, 110), random(110, 110));
   }
}

function draw(){
   wood.resize(width*2, 0);
   image(wood, 0, 0);

   for(let i = bugs.length - 1; i >= 0; i--){
      bugs[i].update();
      bugs[i].show();
      if(bugs[i].frame > 9){
         bugs.splice(i, 1, new bug(random(100, width-100), random(100, height-100)));
      }
   }
   

}

class bug{
   constructor(x, y){

      //Movement
      this.pos = createVector(x, y);      
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);

      //sprite
      this.frame = 0;
      this.c = 50;

      //state
      this.alive = true;

   }  
   
   update(){
      this.acc.add(p5.Vector.random2D());
      this.acc.setMag(10);
      this.vel.add(this.acc);
      this.vel.limit(10);
      if(this.alive == false){
         this.vel.mult(0);
      }
      this.pos.add(this.vel);
      
      if(this.pos.x <= 60 || this.pos.y <= 60){
         this.acc.mult(-1);
         this.vel.mult(-1);
      }

      if((this.pos.x >= width - 60) || (this.pos.y >= height - 60)){
         this.acc.mult(-1);
         this.vel.mult(-1);
      }

      if(this.pos.x <= -100 || this.pos.y <= -100){
         this.pos.x = random(100, 600);
         this.pos.y = random(100, 600);
      }

      if((this.pos.x >= width + 100) || (this.pos.y >= height + 100)){
         this.pos.x = random(100, 600);
         this.pos.y = random(100, 600);
      }
      
   }

   show(){
      stroke(255);
      strokeWeight(4);
      fill(this.c, 75);
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      if(this.alive == false){
         if(this.frame < 4){
            this.frame = 4;
         }
         image(Roach[this.frame], 0, 0);
      }

      if(this.alive == true){
         if(this.frame > 3){
            this.frame = 0;
         }
         image(Roach[this.frame], 0, 0);
      }
      //rect(0, 0, 100, 100);
      this.frame++;
      pop();
   }

   bugClicked(){
      if(((mouseX >= this.pos.x - 50)&&(mouseX <= this.pos.x + 50)) && ((mouseY >= this.pos.y - 32)&&(mouseY <= this.pos.y + 32))){
         this.alive = false;
      }
   }
}

function mouseClicked(){
   for(let j = 0; j < bugs.length; j++){
      bugs[j].bugClicked();
   }
}