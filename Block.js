class Block{
  constructor(x, y, width, height){
    var options={
      isStatic:false
    }
    this.width=width;
    this.height=height;

    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    this.image=loadImage("sprites/box.png");
    this.Visibility=255
  }
  display(){
    if(this.body.speed>3){
      this.Visibility=this.Visibility-5;
      World.remove(world,this.body);
      push();
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      pop();
    }
    
    stroke("red");
    strokeWeight(3);
    fill("orange");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    this.body.speed=4;
  }

}
