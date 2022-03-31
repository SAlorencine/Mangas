class Launcher{
   constructor(bodyA,pointB){
    var opitions = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.04,
        length : 0.8
    }
    this.poitB = pointB
    this.laucher = Contraint.create(opitions);
    World.add(world, this.laucher);
 } 
Arremecar() {
   this.laucher.bodyA = null;
 }   
 display(){
    if (this.laucher.bodyA != null){
      var pontA = this.laucher.bodyA.position;
      var pontB = this.poitB 
     strokeWeight(3)
     line(pontA.x, pontA.y, pontB.x, pontB.y);
    }
  
 }
}
