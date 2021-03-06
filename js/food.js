class Food {
  constructor(ctx, width, height) {
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);

    // super();
    this.ctx = ctx;
    this.posX = randomInt(2, 18) * 30;
    this.posY = randomInt(2, 18) * 30;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "../images/food.png";
  }
  draw(ctx) {
    this.ctx.drawImage(
      this.image,
      0,
      0,
      30,
      30,
      this.posX,
      this.posY,
      30,
      30,
      )
   // this.ctx.drawImage(this.posX, this.posY, this.width, this.height);
  }
}
