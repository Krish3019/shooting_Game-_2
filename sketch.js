const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

 var engine,world
var ground
var mainPlayer
var enemy
var mainPlayerImg

function preload() {
    mainPlayerImg = loadImage("./images/solider_shooting.png")
}



function setup(){
createCanvas(displayWidth,displayHeight)
engine = Engine.create();
world = engine.world

ground = new Ground(displayWidth/2,displayHeight-20,displayWidth,
    displayHeight/20)

mainPlayer = new Player(displayWidth/10,displayHeight/2+175)

enemy = new Npc(displayWidth-80,displayHeight/2)

}


function draw (){
background("skyblue")
Engine.update(engine)
ground.display();
mainPlayer.display();
enemy.display();

//drawSprites();
}

function keyPressed(){
    if(keyCode===80){
      //mainPlayer.shoot(); 
      mainPlayer.addImage("shooter",mainPlayerImg) 

    }
}