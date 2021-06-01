class Npc{
constructor(x,y){
    var options = {

    }
    this.body = Bodies.rectangle(x,y,50,50)
    World.add(world,this.body);
}

display(){
var pos = this.body.position
var angle = this.body.angle
push();
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
fill("yellow")
strokeWeight(3)
stroke("black")
rect(0,0,50,50)
}






}