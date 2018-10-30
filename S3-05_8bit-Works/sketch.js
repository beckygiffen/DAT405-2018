let size = 50;
let img = [];
let names = ["AlexanderJones", "Antony Pye", "Arthur Verrept", "Becky Giffen", "Charlie Whitehair", "Claire Stranack", "Daniel Smith", "Matthew Gammage", "Melissa Junttila", "Mike Austin", "Ryan Ede", "Summer Ashbury"];

let randomValue = 0;

function setup() {
  createCanvas(550, 600);
  imageMode(CENTER);
  textAlign(CENTER, BOTTOM);
  textSize(16);

  img[0] = loadImage("images/AlexanderJones.png");
  img[1] = loadImage("images/AntonyPye.png");
  img[2] = loadImage("images/ArthurVerrept.png");
  img[3] = loadImage("images/BeckyGiffen.png");
  img[4] = loadImage("images/CharlieWhitehair.png");
  img[5] = loadImage("images/ClaireStranack.png");
  img[6] = loadImage("images/DanielSmith.png");
  img[7] = loadImage("images/MatthewGammage.png");
  img[8] = loadImage("images/MelissaJunttila.png");
  img[9] = loadImage("images/MikeAustin.png");
  img[10] = loadImage("images/RyanEde.png");
  img[11] = loadImage("images/SummerAshbury.png");
}

function draw() {
  background(80);
  image(img[randomValue], width/2, height/2);
  fill(200);
  text(names[randomValue], width/2, height-15)
}

function mouseReleased() {
  randomValue = Math.round(random(img.length-1));
  //console.log(randomValue);
}
