let img;
let wood;
let Roach = [];
let bugs = [];
let count = 10;
let font;
let textS = 0;
let mode = -2;
let countDown = 30;
let score = 0;
let level = 2;

let song;
song = new Tone.Player("assets/sounds/MYCREATEDSONG.mp3");
song.toDestination();
song.loop = true;
let endSong;
endSong = new Tone.Player("assets/sounds/yellowTree.mp3");
endSong.toDestination();
endSong.loop = true;
let miss;
miss = new Tone.Player("assets/sounds/miss.mp3");
miss.toDestination();
let splat;
splat = new Tone.Player("assets/sounds/splat.mp3");
splat.toDestination();
let melodyLoop;
melodyLoop = new Tone.Player("assets/sounds/melodyLoop.mp3");
melodyLoop.toDestination();
melodyLoop.loop = true;

let port;
let joyX = 0, joyY = 0, sw = 0;
let connectButton;
let circleX, circleY;
let cleared = false;
let joyClicked = false;


function preload(){
   img = loadImage('libraries/Roach.png');
   wood = loadImage('libraries/Untitled_Artwork.png');
   font = loadFont('libraries/PressStart2P-Regular.ttf');
}

function setup(){
   createCanvas(windowWidth, windowHeight);
   rectMode(CENTER);
   imageMode(CENTER);
   textFont(font);
   frameRate(30);
   pixelDensity(1);
   let x = 0;
   for(let i = 0; i < 10; i++){
      Roach[i] = img.get(x, 0, 96, 100);
      x += 100;
   }

   for(let i = 0; i < count; i++){
      bugs[i] = new bug(random(100, width-100), random(100, height-100));
      //bugs[i] = new bug(random(110, 110), random(110, 110));
   }

   port = createSerial();
   circleX = width / 2;
   circleY = height / 2;

   connectButton = createButton("Connect Arduino");
   connectButton.mousePressed(connect);
   connectButton.position(10, height-40);
}

function draw(){
   wood.resize(width*2, 0);
   image(wood, 0, 0);

   let str = port.readUntil("\n");
   let values = str.split(",");
   console.log(values);
   if(cleared == false){
      if(values.length > 2){
         joyX = Number(values[0]);
         joyY = Number(values[1]);
         sw = Number(values[2]);
      }
   }

   if(sw == 1){
      joystickClicked();
   }

   else if(sw == 0){
      joyClicked = false;
   }

   if(mode == -2){
      startProgram();
   }

   if(mode == 0 || mode == -1){
      startMenu();
   }

   else if(mode == 1){
      play();
   }

   else if(mode == 2){
      endScreen();
   }

   circleX-=joyY*2;
   circleY+=joyX*2;
   cleared = false;

   if(frameCount % 300 == 0){
      port.clear();
      cleared = true;
   }

   circle(circleX, circleY, 50);
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
      this.vel.limit(level);
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
      if(joyClicked == true){
         return;
      }

      if(((circleX >= this.pos.x - 50)&&(circleX <= this.pos.x + 50)) && ((circleY >= this.pos.y - 32)&&(circleY <= this.pos.y + 32))){
         if(this.alive == true){
            score++;
            splat.start();
            level+=.5;
         }
         this.alive = false;
      }

      // else{
      //    if((((circleX >= this.pos.x - 50)&&(circleX <= this.pos.x + 50)) && ((circleY >= this.pos.y - 32)&&(circleY <= this.pos.y + 32))){
      //       miss.start();
      //    }
         
     // }
   }
}

function joystickClicked(){
   if(joyClicked == true){
      return;
   }



   if(mode == -2){
      mode++;
      melodyLoop.start();
   }

   if(mode == 0 || mode == -1){
      if((circleX > width/2 - (700+sin(textS)*120)/2) && (circleX < width/2 + (700+sin(textS)*120)/2) && (circleY > height/2 - (100+sin(textS)*10)/2) && (circleY < height/2 + (100+sin(textS)*10)/2)){
         mode++;
      if(mode == 1){
         melodyLoop.stop();
         song.start();
      }
      }
   }

   if(mode == 1){
      for(let j = 0; j < bugs.length; j++){
         bugs[j].bugClicked();
      }
   }

   if(mode == 2){
      if((circleX > width/2 - (700+sin(textS)*120)/2) && (circleX < width/2 + (700+sin(textS)*120)/2) && (circleY > height/2 - (100+sin(textS)*10)/2) && (circleY < height/2 + (100+sin(textS)*10)/2)){
         score = 0;
         countDown = 30;
         level = 10;
         mode = 0;
         endSong.stop();
         melodyLoop.start();
      }
   }

   joyClicked = true;
}


function startProgram(){
   push();
   textSize(26)
   text('Click the Joystick to Begin...', width/2-330, height/2);
   pop();
}
function play(){
   for(let i = bugs.length - 1; i >= 0; i--){
      bugs[i].update();
      bugs[i].show();
      if(bugs[i].frame > 9){
         bugs.splice(i, 1, new bug(random(100, width-100), random(100, height-100)));
      }
   }

   push();
   textSize(40);
   noStroke();
   fill('black');
   text('Time Left: ' + str(countDown), width/2, 100);
   if(frameCount%30 == 0){
      countDown--;
   }
   pop();

   push();
   noStroke();
   fill('black');
   textSize(50);
   text(score, width/2, height/2);
   pop();

   if(countDown < 0){
      song.stop();
      mode = 2;
      endSong.start();
   }
}

function startMenu(){
   
push();
rectMode(CENTER);
strokeWeight(10);
stroke(0);
fill('white');
rect(width/2, height/2, 700+sin(textS)*120, 100+sin(textS)*10);
pop();

textAlign(CENTER, CENTER);
fill('black');
textSize(40+sin(textS)*10);
text('Click to Start!', width/2, height/2);
textS+=.05;
   
}

function endScreen(){
   push();
   textSize(75);
   stroke('brown');
   fill('black');
   text('GAME OVER!', width/2, 100);
   text('Score: '+score, width/2, 225);

   textSize(40+sin(textS)*10);
   text('Click to Restart!', width/2, height/2);
   textS+=.05;
   pop();
}

function connect() {
  if (!port.opened()) {
    port.open('Arduino', 57600);
  } else {
    port.close();
  }
}