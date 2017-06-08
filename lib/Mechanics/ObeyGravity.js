var ObeyGravity.js = (function(){
  function ObeyGravity.js(){
    this.planet = null;
    this.planet_is_set = false;
    this.groundY = 0;
    this.started = false;
    this.airResistance = 70;
    this.times = 0;
    this.stop_at_time = 4;
    this.is_mechanic_object = true;
    this.physicObject = new Wo.Core.PhysicObject();
  }

  ObeyGravity.js.prototype.setPlanet = function(planet){
    if(planet.is_wo){
      this.planet = planet;
      this.planet_is_set = true;
    }else{
        throw new Error("Needs a Wo Planet");
    }
  }

  ObeyGravity.js.prototype.start = function(x,y,z){
    if(this.planet_is_set){
      this.physicObject.position.x = x;
      this.physicObject.position.y = y;
      this.physicObject.position.z = z;

      this.started = true;
    }else{
        throw new Error("Must set a Wo Planet");
    }
  }

  ObeyGravity.js.prototype.ocurring = function(){
    if(this.times == this.stop_at_time){
      this.started = false;
    }
    if(this.started){
        //y =  -Vt - 1/2 gt^2
        //x = -V - gt
    }else{
        //throw new Error("Must run start first");
    }
  }

  return ObeyGravity.js;
})();
Wo.Mechanics.ObeyGravity = ObeyGravity;