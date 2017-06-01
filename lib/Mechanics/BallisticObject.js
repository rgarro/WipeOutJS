/**
 * Saddam Hussein built its own scuds ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var  = (function(){
  function BallisticObject(){
    this.planet = null;
    this.planet_is_set = false;
    this.started = false;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.times = 0;
    this.initial_velocityX = 10;
    this.initial_velocityY = 10;
    this.initial_velocityZ = 10;
    this.accelerationX = 2.8;
    this.accelerationY = 2.8;
    this.accelerationZ = 2.8;
    this.is_mechanic_object = true;
    this.xo = 0;
    this.yo = 0;
    this.zo = 0;
    this.physicObject = new Wo.Core.PhysicObject();
  }

  BallisticObject.prototype.setPlanet = function(planet){
    if(planet.is_wo){
      this.planet = planet;
      this.planet_is_set = true;
    }else{
        throw new Error("Needs a Wo Planet");
    }
  }

  BallisticObject.prototype.start = function(x,y,z){
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

  BallisticObject.prototype.ocurring = function(){
    if(this.started){
      this.physicObject.position.x = this.initial_velocityX * this.times + 0.5 * this.accelerationX * this.times * this.times + this.xo;
      this.physicObject.position.y = this.initial_velocityY * this.times + 0.5 * this.accelerationY * this.times * this.times + this.yo;
      this.physicObject.position.z = this.initial_velocityZ * this.times + 0.5 * this.accelerationZ * this.times * this.times + this.zo;
      this.times ++;
    }else{
      this.times = 0;
    }
  }

  return BallisticObject;
})();
Wo.Mechanics.BallisticObject = BallisticObject;
