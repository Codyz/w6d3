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
  arr1 = this.towers[2];
  arr2 = range(0, this.stories+1);
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

Hanoi.prototype.getMove = function(div) {
  var from = prompt("Choose a tower to take from");
  var to   = prompt("Choose a tower to place on");


  if (!legalMove(from, to)) {
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
};


Hanoi.prototype.renderGame = function() {


  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < this.towers[i].length; j++) {
      $("#tow"+i+"row"+j).removeClass();
      // see what's happening
      console.log("tow: #tow"+i+"row"+j + "block: "+ this.towers[i][j]);
      console.log(j)

      if (!!this.towers[i][j] || this.towers[i][j] === 0) {
        $("#tow"+i+"row"+j).addClass("block" + this.towers[i][j]);

      }
    }
  }
};

Hanoi.prototype.gameLoop = function(game) {
  game.console.log
}




// Make the JQuery objects to the HTML file


$(document).ready(function() {
  h = new Hanoi(4);
  // $('#tow0row0').addClass('block0');
  // $('#tow0row1').addClass('block1');
  // $('#tow0row2').addClass('block2');
  // $('#tow0row3').addClass('block3');
  // $('#tow0row4').addClass('block4');

  // see if render works
  h.renderGame();


  // var from = prompt("Choose a tower to take from");
  // var to   = prompt("Choose a tower to place on");
  //
  // choice = [from, to];
});





















