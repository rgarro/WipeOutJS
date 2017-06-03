/**
 * Saddam Hussein built its own scuds ...
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var BallisticObject = (function(){
  function BallisticObject(){
    this.planet = null;
    this.planet_is_set = false;
    this.started = false;
    this.times = 0;
    this.velocity = 0.8;//pixels per frame, shooting star falling into the ocean ...
    this.is_mechanic_object = true;
    this.elevation = 0;
    this.vx = 0;
    this.horizontalRotation = 0;
    this.stop_at_time = 500;
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

  BallisticObject.prototype.start = function(x,y,z,elevation,rotation){
    if(this.planet_is_set){
//console.log(z);
console.log(elevation);
      this.physicObject.position.x = x;
      this.physicObject.position.y = y;
      this.physicObject.position.z = z;
      this.elevation = elevation;
      this.horizontalRotation = rotation;
      this.started = true;
    }else{
        throw new Error("Must set a Wo Planet");
    }
  }

  BallisticObject.prototype.ocurring = function(){
    if(this.times == this.stop_at_time){
      this.started = false;
    }
    if(this.started){
      this.physicObject.position.x += (this.velocity)*Math.cos(this.elevation*180/Math.PI);
      this.physicObject.position.y -= ((this.velocity)*Math.sin(this.elevation*180/Math.PI) - (1/2 * this.planet.G * (this.times ^ 2)));
      this.physicObject.position.z += (this.velocity) * Math.sin(this.horizontalRotation*180/Math.PI);
      this.times ++;
    }else{
      this.times = 0;
    }
  }

  return BallisticObject;
})();
Wo.Mechanics.BallisticObject = BallisticObject;
