class Player{
constructor(x,y){
     var options = {
         isStatic:true
     }
this.body = Bodies.rectangle(x,y,50,50,options)
this.image = loadImage("./images/solider_standing.png")
//this.image1= loadImage("./images/solider_shooting.png")
World.add(world,this.body)

}

display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    rotate(angle)
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("red")
    strokeWeight(3)
    stroke("black")
    image(this.image,0,0,200,200)
    pop();
}

//shoot(){
    //var pos = this.body.position
//image(this.image1,pos.x,pos.y,200,200)
//}







}