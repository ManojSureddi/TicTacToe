"use strict";

class Events{
  static eventStart(){
    $(_iboard.boardFrame).on("click","td",(event)=>{
        if(!$(event.target).hasClass(_iboard.class.blocked)){
          $(event.target).addClass(_iboard.class.players[player%2]+" "+_iboard.class.blocked);
          player++;
          if(player>=5){
            let result = Lifecycle.checkGameOver();
            console.log(result);
          }
        }
    })
  }

  static gameControls(){
    $(_iboard.id.single).on("click",(event)=>{
      console.log("manoj")
        $(_iboard.id.start).slideUp();
    });
  }

}
Events.eventStart();
Events.gameControls();
