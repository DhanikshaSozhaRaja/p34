class monster extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("images/Monster-01.png","images/Monster-02.png");
    }
  
   display(){
      super.display();     
   }
  };