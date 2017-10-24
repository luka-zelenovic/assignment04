function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background(25);
  translate(windowWidth/2, windowHeight/2);
  var sizewidth = windowWidth;
  
  if (windowHeight < windowWidth){
    var sizewidth = windowHeight;}
  var s = second();
  var m = minute();
  var h = hour();
  stroke(150);
  fill(200);
  text ('ROLEXX', -sizewidth/7.5, -sizewidth/25);
  textSize(sizewidth/15);
  stroke(0);
  if (s<10) { 
    var s = '0'+ s;}
  if (m<10) { 
    var m = '0'+ m;}
  if (h<10) { 
    var h = '0'+ h;}
  
  text (h+':'+m+":"+s, -sizewidth/7.5, sizewidth/2.3);
  
  clockBack(00, sizewidth/3);
  clockBack(30, sizewidth/3);
  clockBack(60, sizewidth/3);
  clockBack(90, sizewidth/3);
  clockBack(120, sizewidth/3);
  clockBack(150, sizewidth/3);
  clockBack(180, sizewidth/3);
  clockBack(210, sizewidth/3);
  clockBack(240, sizewidth/3);
  clockBack(270, sizewidth/3);
  clockBack(300, sizewidth/3);
  clockBack(330, sizewidth/3);
  

  
  clockHand(6,s,sizewidth/3, 100, 4);
  clockHand(6,m,sizewidth/3, 200, 8);
  clockHand(30, h, sizewidth/6, 255, 12);

  
}
function clockBack(degree, size) {
  push();
  rotate(degree);
  strokeWeight(5);
  stroke(225);
  line(0, -size - .05*size , 0, -size + .25* size);
  
  
  
  
  pop();
}

function clockHand(degree, time, size, color, weight) {
  push();
  rotate(time * degree);
  strokeWeight(weight);
  stroke(color);
  line(0,0,0,-size);
  pop();
}