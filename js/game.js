const game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  score: 0,
  food: [],
  keys: {
    TOP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40
  },

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start();
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      if (this.framesCounter > 5000) {
        this.framesCounter = 0;
      }
      this.framesCounter++;
      this.clear();
      this.drawAll();
      this.generateFood();
      this.score += 0.01;
    }, 1000 / this.FPS);
  },

  setDimensions() {
    this.width = 600;
    this.height = 600;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  drawAll() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.food.forEach(obs => obs.draw());
  },

//   moveAll() {
//     // this.background.move();
//     this.player.move();
//     this.food.forEach(obs => obs.move());
//   },

  reset() {
    this.background = new Background(
      this.ctx,
      this.width,
      this.height,
      "..//images/background.jpeg"
    );
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.food = [];
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateFood() {
    if (this.framesCounter % 90 == 0) {
      this.food.push(
        new food(
          this.ctx,
          this.width,
          this.height,
          this.player.posY0,
          this.player.height
        )
      );
      console.log(this.obstacles);
    }
  },

  clearFood() {
    this.food = this.food.filter(obs => obs.posX >= 0);
  },

  gameOver() {
    clearInterval(this.interval);
  }
};
