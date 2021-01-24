class Hero{
    constructor(x,y,radius){
        var options={
            frictionAir:1,
            density:1
        }
        this.x = x;
        this.y = y;
        this.radius= radius
        this.image = loadImage("images/polygon.png");
          this.body = Bodies.circle(this.x,this.y,this.radius/2,options)
          World.add(world,this.body)
           
         
        }
        display(){
            var ballpos = this.body.position;
            push()
            translate(ballpos.x,ballpos.y);
            fill("pink");
            ellipseMode(RADIUS)
            imageMode(CENTER)
            image(this.image, 0, 0, this.width, this.height);
            ellipse(0,0,this.radius,this.radius)
            pop();
        }
}