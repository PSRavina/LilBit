class CounterDisplay{
      constructor(ctx,counter,posX,posY,color){
          this.ctx = ctx
          this.ctx.font = "30px sans-serif";
          this.count = counter
          this.posX = posX
          this.posY = posY
          this.color = color
      }
      draw() {
        this.ctx.fillStyle = this.color;
        // console.log(Math.floor(this.count), "--------------");
        this.ctx.fillText(this.count, this.posX,this.posY);
      }

  }