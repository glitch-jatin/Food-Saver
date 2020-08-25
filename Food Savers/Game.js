class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    
  }

  
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      

    }

    

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1
      Player.updateCarsAtEnd(player.rank);
      textSize(30);
      text("Your Rank "+player.rank,displayWidth/2,y-120);
    }
   
    drawSprites();
  

  

