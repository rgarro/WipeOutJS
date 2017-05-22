var FallingBouncer = (function(){
  function FallingBouncer(){
    this.planet = null;
    this.planet_is_set = false;
    this.position = {x:0,y:0,z:0,rotationX:0,rotationY:0};
    this.altitude = 0;
    this.radius = 20;
    this.started = false;
    this.vx = 2;// initial horizontal speed
    this.vy = 0;// initial vertical speed
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
      this.position.x = x;  // initial horizontal position
      this.position.y = y;  // initial vertical position
      this.position.z = z;
      this.altitude = y;
      this.started = true;
    }else{
        throw new Error("Must set a Wo Planet");
    }
  }

  FallingBouncer.prototype.ocurring = function(){
    if(this.started){
      this.vy += this.planet.G; // gravity increases the vertical speed
      this.position.x += this.vx; // horizontal speed increases horizontal position
      this.position.y += this.vy; // vertical speed increases vertical position
      if (this.position.y > this.planet.groundY){ // if ball hits the ground
        this.position.y = this.planet.groundY; // reposition it at the ground
        this.vy *= -(this.planet.G); // then reverse and reduce its vertical speed
      }
      if (x > canvas.width + this.radius){ // if ball goes beyond canvas
        this.position.x = -(this.radius); // wrap it around
      }
    }else{
        throw new Error("Must run start first");
    }
  }

  return FallingBouncer;
})();
Wo.Mechanics.FallingBouncer = FallingBouncer;
