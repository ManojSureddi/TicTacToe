"use strict";
class Lifecycle{
  static start(){

  }
  static stop(){

  }
  static checkScore(player1,player2){
      if(player1==3) return {winner:"Player1"}
      else if(player2==3) return {winner:"Player2"}
      else return null;
  }
  static checkDiagonals(){

  }

  static checkColumns(){

  }

  static checkRows(){

  }

  static checkGameOver(){
    var player1=0,player2=0;
    let gameState=[],result=null;

    $("#tictactoe tr").each(function() {
    		gameState.push($(this).find('td'));
    });
    for (var i = 0; i < gameState.length; i++) {
      if($(gameState[i][i]).hasClass("player1")){
        player1++
      }else if($(gameState[i][i]).hasClass("player2")){
        player2++
      }
      console.log("\n\ndiaglnal 1");

      console.log(player1);
      console.log(player2);
        result=this.checkScore(player1,player2);
        if(result) return result;
  }

  for (var i = 0; i < gameState.length; i++) {
    player1=0;player2=0;
    if( $(gameState[i][gameState[i].length-i]).hasClass("player1")){
      player1++
    }else if($(gameState[i][gameState[i].length-i]).hasClass("player2")){
      player2++
    }
    console.log("\n\ndiaglnal 2");

    console.log(player1);
    console.log(player2);
    result=this.checkScore(player1,player2);
    if(result) return result;
  }

  for (var i = 0; i < gameState.length; i++) {
    player1=0;player2=0;

    for (var j = 0; j < gameState[i].length; j++) {
      if($(gameState[j][i]).hasClass("player1")) player1++;
      if($(gameState[j][i]).hasClass("player2")) player2++;
    }
    console.log("\n\ncolumns ",i);

    console.log(player1);
    console.log(player2);
    result=this.checkScore(player1,player2);
    if(result) return result;
  }

  for (var i = 0; i < gameState.length; i++) {
    player1=0;player2=0;

    for (var j = 0; j < gameState[i].length; j++) {
      if($(gameState[i][j]).hasClass("player1")) player1++;
      if($(gameState[i][j]).hasClass("player2")) player2++;
    }
    result=this.checkScore(player1,player2);
    if(result) return result;
  }
}
}
