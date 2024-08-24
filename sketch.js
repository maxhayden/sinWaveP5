let points = [];
let height = 1;
let climb = true;
let sliderA, sliderB, sliderC, sliderD;

function preload() {
  font = loadFont('/font/inconsolata.otf');
}

function setup() {
  createCanvas(1300, 800, WEBGL);

  colorMode(HSB);

  for (x = 0; x < 100; x++){
   for (z = 0; z< 100; z ++){
    points.push({x:x * 40,y: -10, z:z * 40});
   }
  }

  sliderA = createSlider(0, 20, 10, 0.05);
  sliderA.position(10, 10);
  sliderA.size(600);
  text("a", 100, 10)

  sliderB = createSlider(0, 8*PI, 0, 0.5 * PI);
  sliderB.position(10, 35);
  sliderB.size(600);

  sliderC = createSlider(0.00000001 * PI, 0.0001 * PI, 10 * PI, 0.000000001 * PI);
  sliderC.position(10, 60);
  sliderC.size(600);

  sliderD = createSlider(0, 300, 50);
  sliderD.position(10, 85);
  sliderD.size(600);

}


function draw() {
  

  background(0);

  translate(-100, -100);

  stroke(255);

  // Enable orbiting with the mouse.
  orbitControl();

  // Rotate the coordinate system 1/8 turn.
  rotateY(HALF_PI);
  
  
  
  for (const v of points) {

    v.y = sliderA.value() * sin(height * sliderB.value()) * 100;
    height+= sliderC.value();
    stroke(sliderA.value() * sin(height * sliderB.value()) * sliderD.value() % 255, 100, 100);
    strokeWeight(1)
    point(v.x, v.y, v.z);
    
  }

  fill(255);
  textFont(font)
  textSize(30);


  text(sliderD.value(), 100, 100)
}
