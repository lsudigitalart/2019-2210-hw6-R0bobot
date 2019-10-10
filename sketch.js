var spaceShips;
var bridge;
var table;
var vid;
var tv;


function preload(){
  spaceShips = loadImage("nebula.jpg");
  bridge = loadImage("bridge3.png");
  table = loadImage("Table.png");
  vid = createVideo(['corrupt.mp4', 'hellajeff.mp4'], vidLoad);
  tv = loadImage("tv.png");
  cat2 = loadImage("cat2.png");
  cat1 = loadImage("cat1.png");
  cat6 = loadImage("cat6.png");
  scooter = loadImage("scooter.png");
  cat4 = loadImage("cat4.png");
  cat5 = loadImage("cat5.png");
  cat3 = loadImage("cat3.png");
}

function setup(){
  createCanvas(1000, 600);
  background(100);
  image(spaceShips, 0, 0, 1000, 600);

  push();
  tint(random(255), random(255), random(255));
  image(bridge, 0 , 0, 1000, 600);
  pop();

  push();
  tint(random(100, 200), random(100, 200), random(100, 200));
  image(cat2, 355, 310, 50, 50);
  pop();

  push();
  tint(random(100, 200), random(100, 200), random(100, 200));
  image(cat1, 310, 315, 50, 50);
  pop();

  push();
  tint(random(120, 255), random(120, 255), random(120, 255));
  image(cat6, 400, 250, 200, 300);
  pop();

  push()
  tint(random(120, 255), random(120, 255), random(120, 255));
  image(scooter, 150, 220, 350, 400);
  pop();

  push();
  tint(random(255), random(255), random(255));
  image(table, 200, 350, 700, 350);
  pop();

  push();
  tint(random(120, 255), random(120, 255), random(120, 255));
  image(cat4, 840, 250, 200, 200);
  pop();

  push();
  tint(random(120, 255), random(120, 255), random(120, 255));
  image(cat3, 700, 360, 350, 300);
  pop();

  push();
  tint(random(120, 255), random(120, 255), random(120, 255));
  image(cat5, 520, 340, 300, 300);
  pop();

  vid.position(1000, 600);
  vid.size(1, 1);

  let words = ['An enigma brings both pleasure and pain.', 'Insignificance does not make any sense.', 'A sickingly prodigous profile tells the tale of towers.', 'A meeting of minds causes conflict.'];
  let word = random(words); // select random word
  textStyle(ITALIC);
  textSize(22);
  fill("white");
  text(word, 30, 50); // draw the word
}

function draw(){
  image(vid, 680, 230, 130, 100);
  image(tv, 650, 200, 250, 200);

}

function vidLoad(){
  vid.loop();
}
