const game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
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
      console.log(this.checkCollision(this.foods,this.player))
      this.checkCollision(this.foods,this.player);
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
    this.foods.forEach(obs => obs.draw());
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
    this.foods = [];
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateFood() {
  
    if (this.framesCounter % 200 == 0) {
      this.foods.push(
        new Food(
          this.ctx,
          30,//width food
          30,//height food
          // this.player.posY0,
          // this.player.height
        )
      );
     // console.log(this.foods);
    }
  },

  clearFood() {
    this.foods = this.foods.filter(obs => obs.posX >= 0);
  },

  gameOver() {
    alert("Game Over");
    clearInterval(this.interval);
  },

  checkCollision(arr,player){
  
      function isCollision(arr,player) {
        return arr.some(obs => {

          return (
            player.posX + player.width >= obs.posX &&
            player.posY + player.height >= obs.posY &&
            player.posX <= obs.posX + obs.width &&
            player.posY <= obs.posY+obs.height
          );
        });
      }

      return isCollision(arr,player)
    },
   


  eatFood(){
    if(checkCollision){
      //la function que tengas que hacer
    }

  }
  }
