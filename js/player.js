class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;
    this.width = 10;
    this.height = 10;
    this.direction = "right";
    this.image = new Image();
    this.image.src = "./images/player.png";
    this.posX = 20;
    this.posY = 20;
    this.image.frames = 3;
    this.image.framesIndex = 0;
    this.keys = keys;
    this.setListeners();
    this.vel = 3;
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
    if (framesCounter % 8 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex > this.image.frames - 1) {
      this.image.framesIndex = 0;
    }
  }

  move() {
    switch (this.direction) {
      case "up":
        if (this.posY <= this.height) {
          this.posY === this.posY;
        } else {
          this.posY -= this.vel;
        }
        break;
      case "down":
        if (this.posY + 50 >= this.gameHeight) {
          this.posY = this.gameHeight - 50;
        } else {
          this.posY += this.vel;
        }
        break;
      case "right":
        if (this.posX + 50 >= this.gameWidth) {
          this.posX = this.gameWidth - 50;
        } else {
          this.posX += this.vel;
        }
        break;
      case "left":
        if (this.posX < this.width) {
          this.posX = this.posX;
        } else {
          this.posX -= this.vel;
        }
        break;
    }
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      let limit = 100;
      // switch (e.keyCode) {
      //   case this.keys.TOP:
      //     if (this.posY <= this.height) {
      //       this.posY === this.posY;
      //     } else {
      //       this.posY -= 10;
      //     }
      //     break;

      //   case this.keys.LEFT:
      // if (this.posX < this.width) {
      //   this.posX = this.posX;
      // } else {
      //       this.posX -= 10;
      //     }
      //     break;

      //   case this.keys.RIGHT:
      //     if (this.posX + 50 >= this.gameWidth) {
      //       this.posX = this.gameWidth - 50;
      //     } else {
      //       this.posX += 10;
      //     }
      //     break;

      //   case this.keys.DOWN:
      //     if (this.posY + 50 >= this.gameHeight) {
      //       this.posY = this.gameHeight - 50;
      //     } else {
      //       this.posY += 10;
      //     }
      //     break;
      // }
      switch (e.keyCode) {
        case this.keys.TOP:
          this.direction = "up";
          break;

        case this.keys.LEFT:
          this.direction = "left";
          break;

        case this.keys.RIGHT:
          this.direction = "right";
          break;

        case this.keys.DOWN:
          this.direction = "down";
          break;
      }
    });
  }
}
