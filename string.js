
class String{
    constructor(body1, body2)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, x:this.offsetY},
            stiffness: 0.04,
            length: 5
        }
        this.bodyB=body2;
        this.string=Constraint.create(options);
        World.add(world, this.string);
    }

   
    display(){
     var pointA = this.string.bodyA.position;
     var pointB = this.string.bodyB.position;
      strokeWeight(5);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        
    }
    
}