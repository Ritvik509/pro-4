class Paper{
  constructor(x,y,r){
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.2,
    }

    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
    this.image = loadImage("paper.js");
    World.add(world,this.body);
    
  }
  display()
  {
    var paperpos=this.body.position;		
			push()
			translate(paperpos.x,paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.r)
			//draw the ellipse here to display the rubber ball
             ellipse(0,0,this.r,this.r)
			pop()
   }
}