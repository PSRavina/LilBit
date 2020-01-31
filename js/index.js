window.onload = function () {
  let gameDomEl = document.querySelector('.game')
  let introDomEl = document.querySelector('.intro')


  document.getElementById("start-button").onclick = function () {
    gameDomEl.classList.toggle('hide')
    introDomEl.classList.toggle('hide')
    startGame();
  };
  function startGame() {
    document.getElementById("start-button").style.display = "none";
    game.init();
  }
}; 