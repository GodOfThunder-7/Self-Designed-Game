var track1, track2, track3, track4, track5, track6, trackGroup;
var start, startImage, end, endImage;
var player,playeranimation;
var rail1,rail2,rail3,railgroup;
var bombs,bombsImage, bombrand, bombgroup;
var energy, energyImage, energyRand,energygroup;
var coin, coinrand,coinimage,coingroup;
var score=0;
var sound;
var START = 1;
var PLAY = 2;
var END =3;
var railgroup;
var gameState=START;
var score = 0;
var bgImage,bg;
var rail1,rail2,rail3;



function preload(){
    playeranimation=loadAnimation("sprite1.png","sprite2.png", "sprite3.png", "sprite4.png", "sprite5.png");
    coinimage=loadImage("coin.png");
    bombsImage = loadImage("bomb.png");
    energyImage = loadImage ("energyDrink.png");
    startImage = loadImage ("subway-surfers.jpg");
    endImage = loadImage ("game-over-1.jpeg");
    bgImage = loadImage ("background.png");
}
function setup(){
createCanvas(windowWidth,windowHeight);


/*bg = createSprite (width/2,height/2);
bg.addImage("image", bgImage);
bg.scale =5*/


coinrand = Math.round(random(1,3));
energyRand = Math.round(random(1,3));
bombrand = Math.round(random(1,3));

start = createSprite(windowWidth/2, windowHeight/2, 10, 10);
start.addImage ("start", startImage);
start.visible = false;

player= createSprite(windowWidth/2,windowHeight-windowHeight/3,20,20);
player.addAnimation("running",playeranimation);
//player.visible = false;

end = createSprite(windowWidth/2, windowHeight/2, 10, 10);
end.addImage("end", endImage);
end.visible = false;



coingroup = new Group();
bombgroup = new Group();
energygroup = new Group();
railgroup = new Group();
trackGroup = new Group();
track1 = createSprite(windowWidth/28,windowHeight/2, 10,-windowHeight*15);
track1.shapeColor = "brown";
track1.velocityY = 5;
track2 = createSprite(windowWidth/10, windowHeight/2, 10,windowHeight*15);
track2.shapeColor = "brown";
track2.velocityY = 5;
track3 = createSprite(windowWidth/4.4, 0, 10,windowHeight*15);
track3.shapeColor = "brown";
track3.velocityY = 5;
track4 = createSprite(windowWidth/3.45, 0, 10,windowHeight*15);
track4.shapeColor = "brown";
track4.velocityY = 5;
track5 = createSprite(windowWidth/2.35, 0, 10,windowHeight*15);
track5.shapeColor = "brown";
track5.velocityY = 5;
track6 = createSprite(windowWidth/2.05,0, 10,windowHeight*15);
track6.shapeColor = "brown";
track6.velocityY = 5;
}
function draw(){
background("cyan");

textSize(15);
fill("black")
stroke(255);
text ("Score:" + score, width- width/8, height/9);

rails();

if (gameState === START){
    textSize (50);
    text ("Welcome to Subway Surfers by Vedansh", width/5,height/2);
    text("Press Space to Play",width/2, height/1.5);
 track1.visible=false;
 track2.visible=false;
 track3.visible=false;
 track4.visible=false;
 track5.visible=false;
 track6.visible=false;
 coingroup.visible=false;
 start.visible = true;
 player.visible=false



if (keyDown("space")){
    gameState = PLAY;
}
}
else if( gameState === PLAY){

    if (keyDown ("LEFT_ARROW")){
       player.x -= 5;    
    }
    if (keyDown ("RIGHT_ARROW")){
        player.x += 5;    
    }
    player.visible = true;
    rail1.visible = true; 
    rail2.visible = true;
    rail3.visible = true;

    if(player.isTouching (energygroup)){
energygroup.destroyEach();
score= score+20
//player.velocityY = 2*player.velocityY

    }



    if(player.isTouching (coingroup)){
        coingroup.destroyEach();
        score= score+50;
        //player.velocityY = -3;
        
            }

            start.visible = false;
            player.visible = true;
            track1.visible = true;
            track2.visible = true;
            track3.visible = true;
            track4.visible = true;
            track5.visible = true;
            track6.visible = true;
          //  score = score + Math.round(getFrameRate()/60);
            coingroup.visible=true;
        start.destroy()
        // select random objects to display
        var objectselection = Math.round(random(1,3));
        if (frameCount % 50 === 0){
          if(objectselection === 1){
            drawcoin();
        }
        
        if(objectselection === 2){
            drawEnergy();
        }
        
        if(objectselection === 3){
            drawBomb();
        }
        }

if(track1.y>600||track2.y>600||track3.y>600||track4.y>600||track5.y>600||track6.y>600){
    track1.velocityY = 0;
    track2.velocityY = 0;
    track3.velocityY = 0;
    track4.velocityY = 0;
    track5.velocityY = 0;
    track6.velocityY = 0;    
  }


        track1.velocityY = 4
        track2.velocityY = 4
        track3.velocityY = 4
        track4.velocityY = 4
        track5.velocityY = 4
        track6.velocityY = 4

            if(player.isTouching (bombgroup)){
                bombgroup.destroyEach();
                player.destroy();

                gameState = END;
        endImage.visible= true;}}
                         
        else if (gameState === END){
            player.destroy();
            coingroup.destroyEach();
            bombgroup.destroyEach();
            energygroup.destroyEach();
            track1.destroy();
            track2.destroy();
            track3.destroy();
            track4.destroy();
            track5.destroy();
            track6.destroy();     
            railgroup.destroyEach();
           
           // background(0);
            
           end.visible = true; 
         }
                //player.velocityY = -3;
                

   /* bg.velocityY = -5

    if (bg.y<height/2){
        bg.y=height/2
    }*/    




  
    drawSprites();
    if(gameState == START){
        stroke("black");
        fill("white")
        textSize(40);
        text("Press Space to continue ", width/2, 500); 
        text("Use right and left keys to move", width/2, 450);
      }
}


function drawcoin(){
    //if(frameCount%200===0){
    coin = createSprite(100,-40,20,20);
    coin.addImage("coins",coinimage);
    coin.velocityY=5;
    coin.scale=0.5
    coin.lifetime=height/coin.velocityY
    coingroup.add(coin);

    //assigning random places for coin on x axis
    if (frameCount % 30 === 0){
        switch (coinrand){
        case 1: coin.x = width/2;
        coin.velocityY = +(7 +3*score/100);
        break;
        case 2: coin.x = width/4;
        coin.velocityY = +(7 +3*score/100);
        break;
        case 3: coin.x = width/8;
        coin.velocityY = +(7 +3*score/100);
        break; 
        default: break;
  //}
    }
}
}
function drawEnergy(){
    //if (frameCount % 200 === 0){
    energy = createSprite (100,-40, 20, 20);
    energy.addImage ("energyDrink", energyImage);
    energy.velocityY = 5;
    energy.scale = 0.25;
    energy.lifetime = height/energy.velocityY;
    energygroup.add(energy);
    //assigning random places for energy on x axis
    if (frameCount % 30 === 0){
        switch (energyRand){
        case 1: energy.x = width/2;
        energy.velocityY = +(7 +3*score/100);
        break;
        case 2: energy.x = width/4;
        energy.velocityY = +(7 +3*score/100);
        break;
        case 3: energy.x = width/8;
        energy.velocityY = +(7 +3*score/100);
        break;
        default: break;
   //}
}
energy.depth = start.depth;
  start.depth = start.depth+1;
}
}
function drawBomb(){
    //if (frameCount % 200 === 0){
        bomb = createSprite (100,-40, 20, 20);
        bomb.addImage ("Bomb", bombsImage);
        bomb.velocityY = 5;
        bomb.scale = 0.15;
        bomb.lifetime = height/bomb.velocityY;
        bombgroup.add(bomb);
        //assigning random places for bomb on x axis
        if (frameCount % 30 === 0){
            switch (bombrand){
            case 1: bomb.x = width/2;
            bomb.velocityY = +(7 +3*score/100);
            break;
            case 2: bomb.x = width/4;
            bomb.velocityY = +(7 +3*score/100);
            break;
            case 3: bomb.x = width/8;
            bomb.velocityY = +(7 +3*score/100);
            break;
            default: break;
       }
       bomb.depth = start.depth;
  start.depth = start.depth+1;
    }
    }

    function rails(){
  
        //Creating the rails
        if(frameCount%20 === 0) {   
          for (var a = 0; a < 50; a=a+50){
            rail1 = createSprite(100,a,100,10);
            rail1.velocityY = 4;
            rail1.shapeColor="brown";
            rail2 = createSprite(400,a,100,10);
            rail2.velocityY = 4;
            rail2.shapeColor="brown";
            rail3 = createSprite(700,a,100,10);
            rail3.velocityY = 4;
            rail3.shapeColor="brown";
            railgroup.add(rail1);
            railgroup.add(rail2);
            railgroup.add(rail3);
                       
            //adjusting the depths      
            player.depth = rail1.depth;
            rail1.depth = rail1.depth+1;
            
            player.depth = rail2.depth;
            rail2.depth = rail2.depth+1;
            
            player.depth = rail3.depth;
            rail3.depth = rail3.depth+1;
                  
            rail1.visible = false;
            rail2.visible = false;
            rail3.visible = false;
          }
        }
      }
      


//}