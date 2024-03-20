let synth = new Tone.Synth(Tone.Synth).toDestination();
let lfo = new Tone.LFO(25, 1500, 100).connect(synth.frequency).start();
let mouse;
let pop;


let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'f4',
  'g': 'g4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

function preload(){
  mouse = loadImage('balloon.png');
  pop = loadImage('pop.png');
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed === true){
    background(255);
    background(pop);
    
  } 
  else if (mouseIsPressed === false){
    background(255);
    background (mouse);
    textSize(38);
    textStyle(BOLD);
    text ('Click to Pop Balloon!', 7, height-160);
    textSize(15);
    textStyle(ITALIC);
    text ('(You May NOT Want to Hold The Mouse Down...)', 20, height-110);
  }
}

function mousePressed() { 
    synth.triggerAttack();
}

function mouseReleased() { 
  synth.triggerRelease();
} 