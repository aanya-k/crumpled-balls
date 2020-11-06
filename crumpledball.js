class Ball{
    constructor(x,y,radius){
        var options={
            density: 1.2,
            isStatic: false,
            restitution: 0.3,
            friction: 0.5
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        
        ellipseMode(RADIUS);
        fill("pink");

        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}