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
      this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
      0,
      Math.floor(this.image.width / this.image.frames),
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
      
    );

    this.animate(framesCounter);
  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
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
    console.log("antes");
    document.addEventListener("keydown", e => {
      console.log("hola");
      switch (e.keyCode) {
        case this.keys.TOP:
          if (this.posY < 0) {
            this.posY === this.posY - this.height;
          } else if (this.posY > this.gameHeight) {
            this.posY === this.gameHeight - this.height;
          } else {
            this.posY -= 50;
            console.log(this.posY);
          }
          break;

        case this.keys.LEFT:
          this.posX -= 50;
          console.log("←");
          break;

        case this.keys.RIGHT:
          this.posX += 50;
          console.log("→");
          break;

        case this.keys.DOWN:
          this.posY += 50;
          console.log("↓");
          break;
      }
    });
  }
}
