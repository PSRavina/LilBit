class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = "./images/player.png";
    this.posX = 20;
    this.posY = this.gameHeight - this.height - 20;
    this.posY0 = this.posY;
    this.image.frames = 3;
    this.image.framesIndex = 0;
    this.keys = keys;
    this.velY = 1;
    this.setListeners();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      // this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
      // 0,
      // Math.floor(this.image.width / this.image.frames),
      // this.posX,
      // this.posY,
      this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
      0, // Pos X de la imagen que vas a meter 0
      // Pos  Y de la imagen que vas a meter 0
      30, // width de la imagen qeu vas a meter
      30, //height de la imagen que vas a meter
      this.posX, // Pos X en el canvas para colocar la imagen
      this.posY, // Pos y en el canvas para colocar la imagen
      50, // width de la imagen en el canvas
      50 // height de la imagen en el canvas
    );

    this.animate(framesCounter);
  }

  animate(framesCounter) {
    if (framesCounter % 14 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex > this.image.frames - 1) {
      this.image.framesIndex = 0;
    }
  }

  // move() {
  //   // let gravity = 0.4;

  //   // if (this.posY < this.posY0) {
  //   //   this.posY += this.velY;
  //   //   this.velY += gravity;
  //   // } else {
  //   //   this.posY = this.posY0;
  //   //   this.velY = 1;
  //   // }
  // }

  setListeners() {
    document.addEventListener("keydown", e => {
      let limit = 130;
      switch (e.keyCode) {
        case this.keys.TOP:
          this.imagePosition = 0;
          if (this.posY <= this.height-30) {
            this.posY === this.posY;
          } else {
            this.posY -= 40;
          }
          break;

        case this.keys.LEFT:
          this.imagePosition = 50;
          if (this.posX < this.width) {
            this.posX = this.posX;
          } else {
            this.posX -= 40;
          }
          break;

        case this.keys.RIGHT:
          this.imagePosition = 100;
          if (this.posX > this.gameWidth - limit) {
            this.posX === this.posX - this.width;
          } else {
            this.posX += 40;
          }
          break;

        case this.keys.DOWN:
          this.imagePosition = 150;
          if (this.posY > this.gameHeight - limit) {
            this.posY === 600 - this.height *2;
          } else {
            this.posY += 40;
          }
          break;
      }
    });
  }
}
