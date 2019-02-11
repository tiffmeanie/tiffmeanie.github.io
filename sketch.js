
function setup() {
    noStroke();
    noFill();
    rectMode(CENTER);
    var cnv = createCanvas(720, 400);
    
    //var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('content');
//    cnv.position(-width/2,0);
    
}

function draw() {
  background(255, 182, 193);
  //background color of shape
  from = color(255, 221, 245, 0.2 * 255);
  //color info for the "from" variable
  to = color(255, 192, 203, 0.2 * 255);
  //color info for the "to" variable
  c1 = lerpColor(from, to, 0.33);
  //"c1" interpolating between from and to
  c2 = lerpColor(from, to, 0.66);
  //"c2" interpolating from and to 
  for (let i = 0; i < 15; i++) {
    fill(from);
    quad(
      random(-40, 220), random(height),
      random(-40, 220), random(height),
      random(-40, 220), random(height),
      random(-40, 220), random(height)
    );
    fill(c1);
    quad(
      random(140, 380), random(height),
      random(140, 380), random(height),
      random(140, 400), random(height),
      random(140, 400), random(height)
    );
    fill(c2);
    quad(
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height)
    );
    fill(to);
    quad(
      random(300, 760), random(height),
      random(300, 760), random(height),
      random(300, 760), random(height),
      random(300, 760), random(height)
    );
  }
  frameRate(5);
}
