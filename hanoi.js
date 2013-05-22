  // All Game Logic

var range = function(start , end) {
  var inter = [];

  if((end-start)<=1){
    return [start];
  }

  inter = range(start + 1, end);
  return [start].concat(inter);

};

function Hanoi(stories) {
  this.towers = [[],[],[]];
  this.stories = stories;
  this.towers[0] = range(0, this.stories+1);
  this.towers[1] = [0];
  this.towers[2] = [0];
};

// Hanoi.prototype.setup = function(){
//   this.towers[0] = range(0, this.stories+1);
//   this.towers[1] = [0];
//   this.towers[2] = [0];
// };

Hanoi.prototype.winCondition = function(){
  var arr1 = this.towers[2];
  var arr2 = range(0, this.stories+1);
  return !(arr1<arr2 || arr2<arr1);
};

Hanoi.prototype.legalMove = function(from, to) {
  return (this.towers[to][(this.towers[to].length - 1)] <
         this.towers[from][(this.towers[from].length - 1)]);
};

Hanoi.prototype.move = function(from, to) {

  if (this.legalMove(from, to)) {
    this.towers[to].push(this.towers[from].pop());
  } else {
    return false;
  }

  return true;
};


// UI/Game Stuff

Hanoi.prototype.display = function() {
  console.log(this.towers);
};

Hanoi.prototype.getMove = function() {
  var from = prompt("Choose a tower to take from");
  var to   = prompt("Choose a tower to place on");

  if (!this.legalMove(from, to)) {
    alert("Illegal move!");
    return false;
  }

  var choice = [from, to];
  return choice;
};


Hanoi.prototype.render = function() {
  console.log("I'm rendering!");
  // clear the board
  for (var tow = 0; tow < 3; tow++) {
    for (var row = 0; row < 5; row++) {
      $("#tow"+tow+"row"+row).removeClass();
      console.log("Tower"+tow + "Row"+row + " cleared");
    }
  }



  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < this.towers[i].length; j++) {
      if (!!this.towers[i][j] || this.towers[i][j] === 0) {
        $("#tow"+i+"row"+j).addClass("block" + this.towers[i][j]);

      }
    }
  }
};

Hanoi.prototype.playOneTurn = function() {
  var choice = false;
  while (choice === false) {
    choice = this.getMove();
  }

  this.move(choice[0], choice[1]);
  console.log(this.towers);
};



Hanoi.prototype.gameLoop = function() {
  while (!this.winCondition()) {
    this.render();
    this.playOneTurn();
    if (this.winCondition === true) {
      $('h1').html("You've Won!");
    }
  }
};




// Make the JQuery objects to the HTML file


$(document).ready(function() {
  h = new Hanoi(4);
  h.gameLoop();
});





















