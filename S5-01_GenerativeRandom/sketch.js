//Global variable for the size
let size;

function setup() {
  createCanvas(500, 500);
  frameRate(30); //Drawing speed 30 fps
  noStroke();
}

function draw() {
  //Create a new random number for every frame (0 to 200 pixels)
  size = random(200);

  //Call the customShape function
  customShape();
}

//When the function is called, it will draw a shape with random position and color
function customShape(){
  fill(random(255), 0, random(255), random(255));
  ellipse(random(500), random(500), size, size);
}
