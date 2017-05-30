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
    this.initial_velocity = 10;
    this.acceleration = 2.8;
    this.is_mechanic_object = true;
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
/*
x = ux * t + 0.5 * ax * t * t + xo
y = uy * t + 0.5 * ay * t * t + yo
z = uz * t + 0.5 * az * t * t + zo
*/
    }
  }

  return BallisticObject;
})();
Wo.Mechanics.BallisticObject = BallisticObject;
