class Background {
    constructor(ctx, w, h, imgSource) {
      this.ctx = ctx;
      this.width = w;
      this.height = h;
  
      this.image = new Image();
      this.image.src = "./images/background.jpg";
  
      this.posX = 0;
      this.posY = 0;
  
      this.velX = 5;
    }
  
    draw() { console.log("hola");
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
      //this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
    }
  
    move() {
      if (this.posX <= -this.width) {
        this.posX = 0;
      }
      this.posX -= this.velX;
    }
  }
  



    