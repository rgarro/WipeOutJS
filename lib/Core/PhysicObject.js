/**
 * Physical Properties for mesh containing objects
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var PhysicObject = (function(){
  function PhysicObject(){
    this.mass = 0;
    this.acceleration = 0;
    this.velocity = 0;
    this.damping = 0;
    this.position = {x:0,y:0,z:0,rotationX:0,rotationY:0};
  }

  return PhysicObject;
})();
Wo.Core.PhysicObject = PhysicObject;
