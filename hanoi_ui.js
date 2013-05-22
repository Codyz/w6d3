Hanoi.prototype.display = function() {
  console.log(this.towers);
};

Hanoi.prototype.getMove = function() {
  var choice = [];
  var from = window.prompt("From which tower do you want to take a block?");
  var to = window.prompt("Where would you like to place the block?");

  if (!legalMove(from, to) {
    console.log("Illegal move!");
    return false;
  }

  choice = [from, to];
  return choice;
};

Hanoi.prototype.userSetup = function() {
  var stackHeight = window.prompt("How tall would you like to make the stack for your game? Remember, taller means harder!");

  hanoi = new Hanoi(stackHeight);
  hanoi.setup;
  return hanoi;
};

Hanoi.prototype.gameLoop = function(game) {
  game.display();

  while (winCondition !== true) {
    m = false;

    while (m === false) {

    }
  }
}


















