function setup() {
  createCanvas(400, 400)
  noStroke()
  smooth()
}

var r = 256, g = 256, b = 256, loopNum = 0

function draw(){
  for(i = 0; i < 1000; i += 1){
    fill(random(r), random(g), random(b), 150)
    circle(random(width), random(height), random(20))
  }
  if(loopNum < 25){
    r = loopNum%25*10, g = 256-loopNum%25*10, b = 256
  }
  else if(loopNum < 50){
    r = 256, g = loopNum%25*10, b = 256-loopNum%25*10
  }
  else if(loopNum < 75){
    r = 256-loopNum%25*10, g = 256, b = loopNum%25*10
  }
  else{
    loopNum = 0
  }
  loopNum += 1
}
