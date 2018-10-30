//DAT405 / GAD405
//S3-00_Variables

function setup() {
  createCanvas(500,500);
  background(60);

  textSize(22)
  fill(255);
  text("Open the Developer > Javascript Console", 10, 100);
  text("to see the messages", 10, 130);

  //Setup variables with any content - text, numbers, etc
  var name;
  name = "Glenn";
  console.log(name); //Print to the console

  let floatNumber = 0.4;
  console.log(floatNumber);

  //We can also add variables together (as long as they contain a number)
  let sumFloats = floatNumber + floatNumber;
  console.log(sumFloats);

  //For text we can use a method called concatenation
  let concatanateName = "Steve";
  console.log("Name is: " + concatanateName);
}
