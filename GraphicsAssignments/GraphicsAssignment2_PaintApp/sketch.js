let brush = 'black';
let angle = 0;
let p1 = createVector(14, 252);
var slider;


function setup() {
  createCanvas(1000, 600);
  background(240);
  angleMode(DEGREES);
  frameRate(120);

  slider = createSlider(1, 60, 20);
  slider.size(200)
  slider.position(-87,390);
  slider.style('transform', 'rotate(270deg)')
}




function draw() {
  let brushs = slider.value();
  smooth();
  cursor(CROSS);
  strokeWeight(brushs);

  if(mouseIsPressed){
    stroke(brush);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  textSize(200);
  textAlign(CENTER, CENTER)
  text('hi', width/2, height/2);

strokeWeight(0);

  fill(100);
  rect(0, 0, 45, 600);

  fill('red');
  square(2, 4, 24);

  fill('orange');
  square(2, 30, 24);

  fill('yellow');
  square(2, 56, 24);

  fill('lime');
  square(2, 82, 24);

  fill('cyan');
  square(2, 108, 24);

  fill('blue');
  square(2, 134, 24);

  fill('magenta');
  square(2, 160, 24);

  fill('brown');
  square(2, 186, 24);

  fill('white');
  square(2, 212, 24);

  fill('black');
  square(2, 238, 24);

  strokeWeight(1);
  stroke(0);
  fill('white');
  square(2, 264, 24);
  
  push();
  fill('pink');
  //rectMode(CENTER);
  translate(14, 276)
  rotate(angle);
  quad((50/4-20)*.9, (50/4-15)*.9, (120/4-20)*.9, (40/4-15)*.9, (110/4-20)*.9, (80/4-15)*.9, (40/4-20)*.9, (90/4-15)*.9);
  angle = angle + 2;
  //quad(50/4 -7, 50/4+260, 120/4 -5, 40/4+260, 110/4 -5, 80/4+260, 40/4 -7, 90/4+260);
  pop();

  noFill();
}

function mouseClicked(){
  if((mouseX>=2 && mouseX<=26) && (mouseY>=4 && mouseY<=28)){
    brush = 'red';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=30 && mouseY<=54)){
    brush = 'orange';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=56 && mouseY<=80)){
    brush = 'yellow';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=82 && mouseY<=106)){
    brush = 'lime';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=108 && mouseY<=132)){
    brush = 'cyan';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=134 && mouseY<=158)){
    brush = 'blue';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=160 && mouseY<=184)){
    brush = 'magenta';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=186 && mouseY<=210)){
    brush = 'brown';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=212 && mouseY<=236)){
    brush = 'white';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=238 && mouseY<=262)){
    brush = 'black';
  }

  if((mouseX>=2 && mouseX<=26) && (mouseY>=264 && mouseY<=288)){
    brush = 240;
  }
}