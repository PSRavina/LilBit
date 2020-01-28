class Food {
  constructor(ctx,width,height) {
    // super();
    this.ctx = ctx
    this.posX = this.site();
    this.posY = this.site();
    this.width = width
    this.height = height
    this.image = new Image();
    this.image.src = "./images/foodLogo.png";
  }

  
  site() {
    return Math.floor(Math.random() * (600 - 50 + 1) + 50);
  }
  draw(ctx) {
    this.fillStyle = "black"
    this.ctx.fillRect(this.posX,this.posY,this.width, this.height)
  }
}
