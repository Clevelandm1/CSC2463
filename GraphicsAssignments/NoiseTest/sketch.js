let inc = 0;
let incc = .005;
let yinc = 1000;

let x = 0;




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //noiseLine();
  noiseFlatMap();

}

function noiseFlatMap(){
  noFill();
  strokeWeight(10);
  stroke(60);
  beginShape();
  let xoff = inc;
  for(let i = 0; i < width; i++){
    let y = height*noise(xoff);
    vertex(i, y);
    xoff+=.001;
  }
  endShape();
  inc+=incc;
}

function noiseLine(){
  strokeWeight(10);
  let xoff = inc;
  let yoff = yinc;

  let loopd = 0;
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  if(x == 6){
    x = 0;
  }
  stroke(colors[x]);

  noFill();
beginShape();
for(let i = 0; i < 25; i++){
  // if(x == 6){
  //   x = 0;
  // }
  // stroke(colors[x]);
  vertex(noise(xoff-loopd, yoff-loopd)*width, noise(yoff-loopd,xoff-loopd)*height);
  loopd-=.02;
  }
  endShape();
  // stroke('red');
  // point(noise(xoff2)*width, noise(yoff2)*width);
  // stroke('blue');
  // point(noise(xoff2-.02)*width, noise(yoff2-.02)*width);
  // stroke('green');
  // point(noise(xoff2-.04)*width, noise(yoff2-.04)*width);
  inc+=incc;
  yinc+= incc;
  if(frameCount%5 == 0){
    x++;
  }
}
