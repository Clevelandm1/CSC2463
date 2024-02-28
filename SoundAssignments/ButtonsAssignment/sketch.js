let windBlown;
let gameMusic;
let melodyLoop;
let yellowTree;
let reverb;
let reverb_slider;
let room_slider;
let dist;
let dist_slider;
let dwet_slider;
//let player = new Tone.Players()


// Tone.loaded().then(() => {
// 	windBlown.start();
// });
// function preload(){
//   //windBlown = loadSound("assets/sounds/yellowTree.mp3");
// }

reverb = new Tone.JCReverb({
  roomSize : 0,
  wet : 0
}).toDestination();

dist = new Tone.Distortion({
  wet : 1
}).connect(reverb);
windBlown = new Tone.Player("assets/sounds/windBlown.mp3").connect(dist);
gameMusic = new Tone.Player("assets/sounds/gameMusic.mp3").connect(dist);
melodyLoop = new Tone.Player("assets/sounds/melodyLoop.mp3").connect(dist);
yellowTree = new Tone.Player("assets/sounds/yellowTree.mp3").connect(dist);

// function preload(){
//   reverb = new Tone.JCReverb({
//     roomSize : .8,
//     wet: .5
//   }).toDestination();
//   windBlown = new Tone.Player("assets/sounds/windBlown.mp3").connect(reverb);
//   gameMusic = new Tone.Player("assets/sounds/gameMusic.mp3").connect(reverb);
//   melodyLoop = new Tone.Player("assets/sounds/melodyLoop.mp3").connect(reverb);
//   yellowTree = new Tone.Player("assets/sounds/yellowTree.mp3").connect(reverb);
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  // windBlown.connect(reverb);
  // gameMusic.connect(reverb);
  // melodyLoop.connect(reverb);
  // yellowTree.connect(reverb);

  reverb_slider = createSlider(0, 1, 0, 0);
  reverb_slider.position(width/2 - 10, height/2+ 70);

  room_slider = createSlider(0, 1, 0, 0);
  room_slider.position(width/2 - 10, height/2+ 100);

  dwet_slider = createSlider(0, 1, 0, 0);
  dwet_slider.position(width/2 - 10, height/2+ 130);

  let windBlown_button = createButton('Wind Blown');
  windBlown_button.position(width/2, height/2-60);
  windBlown_button.mouseClicked(() =>{
    windBlown.start();
    gameMusic.stop();
    melodyLoop.stop();
    yellowTree.stop();
  });

  let gameMusic_button = createButton('Game Music');
  gameMusic_button.position(width/2, height/2-30);
  gameMusic_button.mouseClicked(() =>{
    gameMusic.start();
    windBlown.stop();
    melodyLoop.stop();
    yellowTree.stop();
  });

  let melodyLoop_button = createButton('Melody Loop');
  melodyLoop_button.position(width/2, height/2);
  melodyLoop_button.mouseClicked(() =>{
    melodyLoop.start();
    gameMusic.stop();
    windBlown.stop();
    yellowTree.stop();
  });

  let yellowTree_button = createButton('Yellow Tree');
  yellowTree_button.position(width/2, height/2+ 30);
  yellowTree_button.mouseClicked(() =>{
    yellowTree.start();
    gameMusic.stop();
    melodyLoop.stop();
    windBlown.stop();
  });
  
}

function draw() {
  background(150);
  text('Reverb Wet (How strong is the overall effect)', width/2+10, height/2 +70);
  text('Reverb Room Size (Wet slider must be > 0)', width/2+10, height/2 +100);
  text('Distortion Wet (How strong is the overall effect)', width/2+10, height/2 +130);
  reverb.wet.value = reverb_slider.value();
  reverb.roomSize.value = room_slider.value();
  dist.wet.value = dwet_slider.value();
}
