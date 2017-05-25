/**
* Could be a stone falling from a bridge
* being pictured in a movie by a morning hicker
* with a Huawei cellphone ...
* https://twitter.com/rolandogarro/status/823258902032764929
*
* @author Rolando <rolando@emptyart.xyz>
*/
var FallingBouncer = (function(){
  function FallingBouncer(){
    this.planet = null;
    this.planet_is_set = false;
    this.altitude = 0;
    this.radius = 20;
    this.started = false;
    this.vx = 2;//initial horizontal speed
    this.vy = 0;//initial vertical speed
    this.physicObject = new Wo.Core.PhysicObject();
  }

  FallingBouncer.prototype.setPlanet = function(planet){
    if(planet.is_wo){
      this.planet = planet;
      this.planet_is_set = true;
    }else{
        throw new Error("Needs a Wo Planet");
    }
  }

  FallingBouncer.prototype.start = function(x,y,z){
    if(this.planet_is_set){
      this.physicObject.position.x = x;//initial horizontal position
      this.physicObject.position.y = y;//initial vertical position
      this.physicObject.position.z = z;
      this.altitude = y;
      this.started = true;
    }else{
        throw new Error("Must set a Wo Planet");
    }
  }

  FallingBouncer.prototype.ocurring = function(){
    if(this.started){
      this.vy += this.planet.G;//gravity increases the vertical speed
      this.physicObject.position.x += this.vx;//horizontal speed increases horizontal position
      this.physicObject.position.y += this.vy;//vertical speed increases vertical position
      if (this.physicObject.position.y > this.planet.groundY){//if ball hits the ground
        this.physicObject.position.y = this.planet.groundY;//reposition it at the ground
        this.vy *= -(this.planet.G);//then reverse and reduce its vertical speed
      }
      if (this.physicObject.position.x > 800 + this.radius){ // if ball goes beyond canvas
        this.physicObject.position.x = -(this.radius); // wrap it around
      }
    }else{
        throw new Error("Must run start first");
    }
  }

  return FallingBouncer;
})();
Wo.Mechanics.FallingBouncer = FallingBouncer;
