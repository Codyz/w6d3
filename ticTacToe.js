var myTranspose = function(arr){
  var result = [];

  for(var i = 0; i < arr.length; i++){
    var temp_row = [];

    for(var j = 0; j < arr.length; j++){
      temp_row.push(arr[j][i]);
    }

    result.push(temp_row);
  }
  return result;
};


function TicTacToe() {
  this.board = new Array(new Array(3), new Array(3), new Array(3));
};

TicTacToe.prototype.legalMove = function(spot) {
  return !this.board[spot[0]][spot[1]];
};

TicTacToe.prototype.move = function(spot, symbol) {
  if (this.legalMove(spot)) {
    this.board[spot[0]][spot[1]] = symbol;
    return true;
  }

  return false;
};

TicTacToe.prototype.checkStraights = function() {

  var dupBoard = this.board;

  for(var i = 0; i < 2; i++){

    for (var j = 0; j < 3; j++) {
      row = dupBoard[j];

      if (row[0] && row[0] === row[1] && row[0] === row[2]) {
        return row[0];
      }
    }

    dupBoard = myTranspose(dupBoard);
  }

  return "";
};


TicTacToe.prototype.checkDiagonals = function() {

  var dupBoard = this.board;

  for(var i = 0; i < 2; i ++){

    if (dupBoard[0][0] && dupBoard[0][0] === dupBoard[1][1] &&
        dupBoard[0][0] === dupBoard[2][2]) {
        return dupBoard[0][0];
      }

    dupBoard = myTranspose(dupBoard);
  }

  return "";
};

TicTacToe.prototype.winCondition = function() {

  line_win = this.checkStraights();
  diag_win = this.checkDiagonals();

  return  line_win || diag_win;

};















