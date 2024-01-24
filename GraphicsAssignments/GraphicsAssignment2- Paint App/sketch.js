function setup() {
  createCanvas(1000, 600);
  background(240);
}

let brush = 'black';

function draw() {
  strokeWeight(1);
  cursor(CROSS);
  fill('black');
  strokeWeight(4)

  if(mouseIsPressed){
    stroke(brush);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

strokeWeight(0);

  fill('red');
  let red = square(2, 4, 24);

  fill('orange');
  let orange = square(2, 30, 24);

  fill('yellow');
  let yellow = square(2, 56, 24);

  fill('lime');
  let lime = square(2, 82, 24);

  fill('cyan');
  let cyan = square(2, 108, 24);

  fill('blue');
  let blue = square(2, 134, 24);

  fill('magenta');
  let magenta = square(2, 160, 24);

  fill('brown');
  let brown = square(2, 186, 24);

  fill('white');
  let white = square(2, 212, 24);

  fill('black');
  let black = square(2, 238, 24);

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
}