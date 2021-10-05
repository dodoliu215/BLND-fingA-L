let device; //判斷是電腦還是手機
let cnv;

let anim = [];
let anim_max = 10;
let sound = [];
//pic
let notice;

let bgcolor;
var colors = "EAEAEA-EFA0B1-C9C9C9-A1D1CF-FFDDD9".split("-").map(a => "#" + a)


//credit
let BLND;
let credit;
let BLND_hover;
let credit_hover;
let cardX = 800;
let cardY = 600;

let scene1 = true; //notice scene
let scene2 = false;

//count
let runTime = 0;
let startTime = 0;

//credit
let creditName;
let creditName2;

let K;

let deviceX;
let deviceY;

let blockY;
let blockX;


let overAllTexture;

function preload(){
  for(let i=0; i<9; i++){
    sound[i] = loadSound('s'+ i +'.wav');//'s0.wav'
  }
  notice = loadImage('pic/notice.png');
  BLND = loadImage('pic/BLND.png');
  credit = loadImage('pic/credit.png');
  BLND_hover = loadImage('pic/BLNDHover.png');
  credit_hover = loadImage('pic/creditHover.png');
  //font
  NotoSansMono_Medium = loadFont('font/NotoSansMono-Medium.ttf');
  NotoSansMono_Bold = loadFont('font/NotoSansMono-Bold.ttf');
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  //count
  startTime = second();

  //bgcolor
  bgcolor = '#EAEAEA';

  //font
  creditName = 'Producer /\nBLND\n\nArt Director /\nTsai, Bing-Hua\n\nWeb Develope /\nLiu, Dodo';
  creditName2 = 'Visual Design /\nLiu, Dodo\n\nSound Design /\nLiu, Dodo';
  
  //texture
  overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,40,80])))
		}
	}
	overAllTexture.updatePixels()
	fill(0)
	rect(0,0,width,height)
  

  device = isInPhone();
  console.log(device);
}

const isInPhone = () => {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return true     //手機
  } else {
      return false    //電腦
  }
}



function draw() {
  background(bgcolor);

  //count
  runTime = second() - startTime;
  // textSize(20);
  // text(runTime, width/2, height/2);



  if(device == false){
    //電腦
  }else{
    //手機
    mobile();
  }

  

  if(scene1 == true){
  //notice
  push();
  translate(windowWidth/2, windowHeight/2-70);
  imageMode(CENTER);
  notice.resize(2489*0.35, 601*0.35);
  image(notice, 0, 0);
  pop();
  anim.length = 0;
  
  }else if(scene2 == true){
    for(let i=0; i<anim.length; i++){
      anim[i].move();
      anim[i].show();  
    }
    if(anim.length > anim_max){
      anim.splice(0,1);
    }

    //count 5
    if(runTime >= 5){
      scene2 = false;
      scene1 = true;
    }
  }

  //BLND
  if(mouseX >= windowWidth-320 && mouseX <= windowWidth-210 && mouseY >= windowHeight-80 && mouseY <= windowHeight-30){
    push();
    translate(windowWidth-260, windowHeight-60);
    imageMode(CENTER);
    BLND_hover.resize(273*0.6, 172*0.6);
    image(BLND_hover, 0, 0);
    pop();
    if(mouseIsPressed){
        window.open('https://www.blnd.tw/', 'BLND');
    }

  }else{
    push();
    translate(windowWidth-260, windowHeight-60);
    imageMode(CENTER);
    BLND.resize(280*0.6, 172*0.6);
    image(BLND, 0, 0);
    pop();
  }

  //line
  push();
  stroke(0);
  strokeWeight(1);
  line(windowWidth-168, windowHeight-80, windowWidth-168, windowHeight-33)
  pop();


  //credit
  if(mouseX >= windowWidth-135 && mouseX <= windowWidth-55 && mouseY >= windowHeight-80 && mouseY <= windowHeight-50){
    push();
    translate(windowWidth-100, windowHeight-60);
    imageMode(CENTER);
    credit_hover.resize(214*0.6, 172*0.6);
    image(credit_hover, 0, 0);
    pop();

    if(scene1 == true){
      scene2 = true;
      scene1 = false;
      push();
      translate(windowWidth/2, windowHeight/2 -20);
      rectMode(CENTER);
      noStroke();
      fill(0, 200);
      rect(0, 0, cardX, cardY);
      pop();

      push();
      translate(windowWidth/2, windowHeight/2);
      fill(255);
      noStroke();
      textFont(NotoSansMono_Bold);
      textSize(25);
      textStyle(BOLD);
      textAlign(CENTER);
      text('CREDIT', 0, -230);
      textFont(NotoSansMono_Medium);
      textSize(20);
      textStyle(NORMAL);
      textAlign(LEFT);
      textLeading(40);
      text(creditName, -230, -120);
      text(creditName2, 90, -120);
      pop();

    }else{
      push();
      translate(windowWidth/2, windowHeight/2 -20);
      rectMode(CENTER);
      noStroke();
      fill(0, 200);
      rect(0, 0, cardX, cardY);
      pop();

      push();
      translate(windowWidth/2, windowHeight/2);
      fill(255);
      noStroke();
      textFont(NotoSansMono_Bold);
      textSize(25);
      textStyle(BOLD);
      textAlign(CENTER);
      text('CREDIT', 0, -230);
      textFont(NotoSansMono_Medium);
      textSize(20);
      textStyle(NORMAL);
      textAlign(LEFT);
      textLeading(40);
      text(creditName, -230, -120);
      text(creditName2, 90, -120);
      pop();
    }

  }else{
    push();
    translate(windowWidth-100, windowHeight-60);
    imageMode(CENTER);
    credit.resize(211*0.6, 172*0.6);
    image(credit, 0, 0);
    pop();
  }



  //texture
  push()
  blendMode(MULTIPLY)
  image(overAllTexture,0,0)
  pop()
}




function mousePressed(){
  if (scene1 == true) {
      scene2 = true;
      scene1 = false;
  }
  startTime = second();
}


function keyPressed(){
  if (scene1 == true) {
    scene2 = true;
    scene1 = false;
  }
  startTime = second();
}


function keyTyped(){
  if(key == ' '){
    bgcolor = random(colors);
  }

  if(key == 'a'){
    anim.push(new Anim_a(random(width), random(height), random(200,220), random(80,106), random(150,207)));
    sound[0].play();
    sound[0].setVolume(0.8);
  } 
  if(key == 's'){
    anim.push(new Anim_s(random(20,50)));
    sound[1].play();
    sound[1].setVolume(0.5);
  } 
  if(key == 'd'){
    anim.push(new Anim_d());
    sound[2].play();
    sound[2].setVolume(0.9);
  }
  if(key == 'f'){
    anim.push(new Anim_f(random(360)));
    sound[3].play();
    sound[3].setVolume(0.1);
  }
  if(key == 'g'){
    anim.push(new Anim_g(random(360)));
    sound[4].play();
  }

  if(key == 'h'){
    for(let i=0; i<7; i++){
    anim.push(new Anim_h(random(width), random(height), random(100, 200)));
    }
    sound[6].play();
    sound[6].setVolume(0.5);
  }

  if(key == 'j'){
    anim.push(new Anim_j(random(50),random(50,120),random(170,188)));
    sound[7].play();
    sound[7].setVolume(0.4);
  }

  if(key == 'k'){
    K = random(0, 2);
    if(K <= 1){
      anim.push(new Anim_k(0, random(height), width, random(height)));
    }else{
      anim.push(new Anim_k(random(width), 0, random(width), height));
    }
    sound[5].play();
    sound[5].setVolume(1);
  }

  if(key == 'l'){
    for(let i=0; i<6; i++){
      anim.push(new Anim_l(random(width), -30, random(-10,10), random(10,40), random(0.3, 1.5), random(10, 15)));
      }
    sound[8].play();
    sound[8].setVolume(0.2);
  }
}
