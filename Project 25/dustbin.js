class Dustbin {
    constructor(x, y, width, height) {
      var options={
        isStatic : true,  
      }  
      var thickness = 10;
      this.image = loadImage("dustbingreen.png");
      this.leftwallbody = Bodies.rectangle(x - width/2,y - height/2,thickness,height, options);
      this.rightwallbody = Bodies.rectangle(x + width/2,y- height/2,thickness,height, options);
      this.body = Bodies.rectangle(x,y,width-2*thickness,height/2, options);
      this.width = width;
      this.height = height;
      World.add(world, this.leftwallbody);
      World.add(world, this.rightwallbody);
      World.add(world, this.body);
    } 
    
    display() {
      var pos = this.body.position;
      var posRight = this.rightwallbody.position;
      var posLeft = this.leftwallbody.position;
    //   rectMode(CENTER);
    //   fill("black");
    //   rect(posLeft.x, posLeft.y,10,this.height);
    //   rect(posRight.x, posRight.y,10,this.height);
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height*2);
    } 
  }