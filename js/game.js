const game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  time: 10,
  score: 0,
  body: [],
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
      // console.log(this.checkCollision(this.foods, this.player));
      this.foods.forEach((food, idx) => {
        if (this.checkCollision(food, this.player)) {
          this.foods.splice(idx, 1);
          this.scoreDisplay.count += 1;
          this.score += 1;
          this.timeDisplay.count += 2;
          
        }
      });
      if (this.beers.length !== 0) {
        this.beers.forEach((beer, idx) => {
          if (this.checkCollision(beer, this.player)) {
            this.gameOver();
          }
        });
      }
      this.ellementFully();
      this.wallcollision();
      this.finalTime();
      this.generateFood();
      this.generateBeer();
      this.player.move();
      this.timeDisplay.count -= 0.01;
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
    this.scoreDisplay.draw();
    this.timeDisplay.draw();
    this.player.draw(this.framesCounter);
    this.foods.forEach(obs => obs.draw());
    this.beers.forEach(beer => beer.draw());
  },

  moveAll() {
    this.player.continueMove();

    //     this.food.forEach(obs => obs.move());
  },

  reset() {
    this.background = new Background(
      this.ctx,
      this.width,
      this.height,
      "..//images/background.jpeg"
    );
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.foods = [];
    this.beers = [];
    this.gameover = new GameOverScreen(this.ctx, 0, 0, this.width, this.height)
    this.scoreDisplay = new CounterDisplay(
      this.ctx,
      this.score,
      15,
      50,
      "yellow"
    );
    this.timeDisplay = new CounterDisplay(this.ctx, this.time, 520, 55, "blue");
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateFood() {
    if (this.framesCounter % 100 == 0) {
      this.foods.push(
        new Food(
          this.ctx,
          30, //width food
          30 //height food
          // this.player.posY0,
          // this.player.height
        )
      );
      // console.log(this.foods);
    }
  },

  // clearFood() {
  //   this.foods = this.foods.filter(foods => foods.posX =this.player.posX);
  // },
  wallcollision() {
    if (
      this.player.posX <= 9 ||
      this.player.posX >= 570 ||
      this.player.posY <= 9 ||
      this.player.posY >= 570
    ) {
      this.gameOver();
    }
  },

  gameOver() {
    this.gameover.draw();
    setTimeout(()=>{
      clearInterval(this.interval);
    },3000)
   
  },

  checkCollision(obs, player) {
    return (
      obs.posX + obs.width >= player.posX &&
      obs.posY + obs.height >= player.posY &&
      obs.posX <= player.posX + player.width &&
      obs.posY <= player.posY + player.height
    );
  },
  generateBeer() {
    if (this.framesCounter % 350 == 0) {
      this.beers.push(new Beer(this.ctx, 30, 30));
    }
  },

  finalTime() {
    if (this.timeDisplay.count <= 0) {
      this.gameOver();
    }
  },

  ellementFully() {
    if (this.foods.length >= 8) {
      this.gameOver();
    }
  }
};
