class Stone{
constructor(x,y,r){

    var options = {

        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
       }

    this.body = Bodies.circle(x,y,r,options);
    this.image = loadImage("stone.png");
    this.boyImage = loadImage("boy.png");
    this.r = r;

    World.add(world,this.body);


}


display(){

var pos = this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.r*4,this.r*4);
image(this.boyImage,180,550)
pop();
}
}