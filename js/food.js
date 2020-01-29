class Food {
  constructor(ctx, width, height) {
    // super();
    this.ctx = ctx;
    this.posX = this.site() - 15;
    this.posY = this.site() - 15;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "./images/foodLogo.png";
  }

  site() {
    return Math.floor(Math.random() * (600 - 10 + 1) + 10);
  }
  draw(ctx) {
    this.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
