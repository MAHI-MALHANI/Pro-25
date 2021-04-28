class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=220;
		this.dustbinHeight=270;
		this.wallThickness=20;
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		this.image=loadImage("dustbingreen.png");

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			  var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
		    var posRight=this.rightWallBody.position;

			push();
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			strokeWeight(4);
			angleMode(RADIANS);
			fill(255);
			rotate(this.angle);
			//rect(0,-12,this.wallThickness, this.dustbinHeight=290);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			strokeWeight(4);
			angleMode(RADIANS);
			fill(255);
			rotate(-1*this.angle);
			//rect(0,-5,this.wallThickness, this.dustbinHeight=290);
			pop();

			push();
			translate(posBottom.x, posBottom.y+5);
			rectMode(CENTER);
			strokeWeight(4);
			angleMode(RADIANS);
			fill(255);
			//rect(0,-5,this.dustbinWidth=210, this.wallThickness);
			pop();

			image(this.image, 1065,345,this.dustbinWidth=280, this.dustbinHeight=320);

	}

}