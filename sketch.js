let input;
let img;
let canvas;
let imgAdd;
let imgSave;
let imgReset;
let reX;
let lineColor = 0;
let bgColor = 255;
let lineWeight = 3;
let lineTrig = 0;

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('sketch-holder');
  background(bgColor);
  stroke(lineColor);
  strokeWeight(lineWeight);
  
  imgSave = createButton('Save Image');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);
  
  imgReset = createButton('Reset Image');
  imgReset.parent('reset-button');
  imgReset.mousePressed(reset);
}

function saveImage() {
  saveCanvas(canvas, 'mirrorDrawing', 'png');
}
function reset() {
  background(bgColor);
}

function draw() {
  
  if (mouseIsPressed == true){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, mouseY, width - pmouseX, pmouseY);
  stroke(lineColor);
  strokeWeight(lineWeight);
  }

}