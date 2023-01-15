let kick, snare, hat, clap;
let f1 = 255;
let f2 = 255;
let f3 = 255;
let f4 = 255;

function preload() {
 kick = loadSound("808-Kicks21.wav"); 
  snare = loadSound('808-Snare10.wav');
  hat = loadSound('808-HiHats12.wav');
  clap = loadSound('808-Clap02.wav');
}

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
 stroke(0);
  fill(255, f1, f1);
  rect(100, 100, 100, 100);
  fill(255, f2, f2);
  rect(200, 100, 100, 100);
  fill(255, f3, f3);
  rect(100, 200, 100, 100);
  fill(255, f4, f4);
  rect(200, 200, 100, 100);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("Press UP = Kick", 200, 30);
  text("Press DOWN = Snare", 200, 50);
  text("Press LEFT = HiHat", 200, 70);
  text("Press RIGHT = Clap", 200, 90);

}


function keyPressed() {
 if(keyCode == UP_ARROW) {
  kick.play(); 
   f1 = 0;
 }
  if(keyCode == DOWN_ARROW) {
  snare.play(); 
   f2 = 0;
 }
  if(keyCode == LEFT_ARROW) {
  hat.play(); 
   f3 = 0;
 }
  if(keyCode == RIGHT_ARROW) {
  clap.play(); 
   f4 = 0;
 }
}

function keyReleased() {
  f1 = 255;
  f2 = 255;
  f3 = 255;
  f4 = 255;
}
