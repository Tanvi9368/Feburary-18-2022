class CannonBall {
    constructor(x,y) {
        this.x=x
        this.y=y
        this.r=30
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,this.r,options)
        this.image=loadImage("assets/cannonBall.png")
        World.add(world,this.body)
    }
    display() {
        var pos=this.body.position
        push()
        imageMode(CENTER)
image(this.image,pos.x,pos.y,this.r,this.r)
pop()
    };

    shoot() {
        Matter.Body.setStatis(this.body,false)
        Matter.Body.setVelocity(this.body,{
            x: 30,
            y: -20
        })
    }
    
}