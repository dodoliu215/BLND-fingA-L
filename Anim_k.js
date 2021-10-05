class Anim_k{
  constructor(startX, startY, endX, endY) {
    this.start = createVector(startX, startY);
    this.end = createVector(endX, endY);
    this.vertexArray = [];
    this.tempX;
    this.tempY;
    this.angle = 0;
    this.alpha = 255;
  }


  show() {
    push();
    beginShape();
    noFill();
    //color
    stroke(117, 66, 31,this.alpha);
    strokeWeight(3);

    for (let i = 0; i < this.vertexArray.length; i++) {
      vertex(this.vertexArray[i].x, this.vertexArray[i].y);
    }
    endShape();
    pop();
  }

  move() {
    this.tempX = map(this.angle, 0, 100, this.start.x, this.end.x, 1);
    this.tempY = map(this.angle, 0, 100, this.start.y, this.end.y, 1);

    this.vertexArray.push(createVector(this.tempX, this.tempY));

    this.angle += 10;
    this.alpha -= 3;
  }

}





