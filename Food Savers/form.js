class Form {

    constructor() {
      this.input = createInput("Name");
      this.add = createInput("Address")
      this.helper = createButton('Helper');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.ngo = createButton('NGO');
      this.doneH = createButton('DONE');
      this.sent = createElement('h2');
      this.doneN = createButton('DONE')
    }
    hide(){
      this.greeting.hide();
      this.helper.hide();
      this.input.hide();
      this.title.hide();
      this.ngo.hide();
      this.add.hide();
      this.doneH.hide();
      this.doneN.hide();
      this.sent.hide();
    }
  
    display(){
      this.title.html("Are You Helper or NGO");
      this.title.position(displayWidth/2 -80, 150);
  
      //this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.helper.position(displayWidth/2 + 80, displayHeight/2);
      this.ngo.position(displayWidth/2 - 80, displayHeight/2);
      
  
      this.helper.mousePressed(()=>{
       // this.input.hide();
       this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
       this.add.position(displayWidth/2 - 40 , displayHeight/2 - 60);
       this.doneH.position(displayWidth/2 - 40, displayHeight/2);

      

        this.helper.hide();
        this.ngo.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  
        
  
      });

      this.ngo.mousePressed(()=>{
        //this.input.hide();
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
        //this.add.position(displayWidth/2 - 40 , displayHeight/2 - 60);
        this.doneN.position(displayWidth/2 - 40, displayHeight/2);

        this.helper.hide();
        this.ngo.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  
        
  
      });

      this.doneH.mousePressed(()=>{
        //this.input.hide();
        //this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
        //this.add.position(displayWidth/2 - 40 , displayHeight/2 - 60);
       // this.helper.hide();
        //this.ngo.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.sent.html("Your Information is collected " + player.name)
        this.sent.position(displayWidth/2 - 70, displayHeight/4);
      });

      this.doneN.mousePressed(()=>{
        //this.input.hide();
        //this.input.position(displayWidth/2 - 40 , displayHeight/2 - 100);
        //this.add.position(displayWidth/2 - 40 , displayHeight/2 - 60);
       // this.helper.hide();
        //this.ngo.hide();
        //player.name = this.input.value();
        //playerCount+=1;
        //player.index = playerCount;
        //player.update();
        //player.updateCount(playerCount);
        //this.sent.html("Your Information is collected " + player.name)
       // this.sent.position(displayWidth/2 - 70, displayHeight/4);
      });
      

    }
  }
  