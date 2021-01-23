class Bob {
    constructor(xPos, yPos,radius) {
        var bobDiameter;

        var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
        this.bobDiameter=bobDiameter
        this.body=Bodies.circle(this.xPos,this.yPos,this.radius/2,options);
        World.add(world,this.body);
        this.bobDiameter=this.radius*2;
    }

    display(){
        var bobPos=this.body.position;
        //rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,0)
        push();
        translate(bobPos.x, bobPos.y);
        circle(0,0,this.radius);
        pop();
    }
};  