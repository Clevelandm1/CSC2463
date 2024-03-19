//create a synth and connect it to the main output (your speakers)

const synth = new Tone.PolySynth(Tone.Synth);
const bend = new Tone.Reverb(); // adding pitch shifting
let decay;
bend.decay = 0.01;
synth.connect(bend);
bend.toDestination();
//connecting synth to effect to destination

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

function setup() {
  createCanvas(400, 400);
  
  decaySlider = createSlider (5., 19., 9., .01);
  decaySlider.position (120,200);
  decaySlider.mouseMoved(() => {
    bend.decay = decaySlider.value();
  })
 // mouseMoved is so the bend works while mouse is moving
}

function draw() {
  background(100);
  text("Play A through K and change reverb delay with slider.", 45, 150);
  print(bend.decay);
}



function keyPressed() {
  let playNotes = notes[key]; // assign notes variable to keys when played
  synth.triggerAttack(playNotes);
// separated attack and release so keyboard press controls this
}

function keyReleased() {
  let playNotes = notes[key]; // assign notes variable to keys when played
  synth.triggerRelease(playNotes, '+0.03'); 
  // added time to release to reduce popping sound
}