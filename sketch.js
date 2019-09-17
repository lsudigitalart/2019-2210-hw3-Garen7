const xSpread = 200, ySpread = 200
mouseHasBeenPressed = false

function setup() {
  createCanvas(innerWidth, innerHeight)
  noStroke()
  smooth()
  textSize(24)
}

var r = 256, g = 256, b = 256, loopNum = 0

function draw(){
  //the starting prompt
  if(mouseIsPressed && !mouseHasBeenPressed){
    mouseHasBeenPressed = true
    clear()
  }
  if(!mouseHasBeenPressed){
    fill(r, g, b)
    text("Click and drag to draw", width/2-100, height/2)
  }
  
  //drawing the circles
  for(i = 0; i < 100; i += 1){
    if(mouseIsPressed){
      fill(random(r), random(g), random(b), 150)
      circle((random(xSpread)+random(xSpread)+random(xSpread))/3-xSpread/2+mouseX, (random(ySpread)+random(ySpread)+random(ySpread))/3-ySpread/2+mouseY, random(20))
    }
  }
  
  //changing color
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
