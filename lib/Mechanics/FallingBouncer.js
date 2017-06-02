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
    this.rotationY = 45;
    this.started = false;
    this.airResistance = 70;
    this.vx = 0.001;//initial horizontal speed
    this.vy = 0;//initial vertical speed
    this.vz = 0;//z correction delta
    this.times = 0;
    this.stop_at_time = 4;
    this.is_mechanic_object = true;
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
      this.vz = this.radius*Math.cos(this.rotationY);
      this.started = true;
    }else{
        throw new Error("Must set a Wo Planet");
    }
  }

  FallingBouncer.prototype.ocurring = function(){
    if(this.times == this.stop_at_time){
      this.started = false;
    }
    if(this.started){
      this.vy += this.planet.G/this.airResistance;//gravity increases the vertical speed
      if(this.physicObject.position.y == 0){
        this.times ++;
      }
      if (this.physicObject.position.y > this.planet.groundY){//if ball hits the ground
        this.physicObject.position.y -= this.vy;
      }else{
        this.physicObject.position.y += this.vy;
      }
      if (this.physicObject.position.x > 800 + this.radius){ // if ball goes beyond canvas
        this.physicObject.position.x -= (this.radius); // wrap it around
        this.physicObject.position.z -= this.vz;
      }else{
        this.physicObject.position.x += this.vx;//horizontal speed increases horizontal position
        this.physicObject.position.z += this.vz;
      }
    }else{
        //throw new Error("Must run start first");
    }
  }

  return FallingBouncer;
})();
Wo.Mechanics.FallingBouncer = FallingBouncer;
