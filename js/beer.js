class Beer {
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
    this.image.src = "./images/cervezareducida.png";
  }
  draw() {
    console.log("deberia haber una fuckin cervesita")
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

  }
}
