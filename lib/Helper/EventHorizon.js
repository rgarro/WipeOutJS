/**
 * Automatic Recursive Mechanic Render Line Up
 *   'kurukulle shooting arrows ...'
 *
 * @author Rolando <rolando@emptyart.xyz>
 */
var EventHorizon = (function(){
  function EventHorizon(){
    this.events = [];
    this.currentEventIndex = 0;
  }

  EventHorizon.prototype.lineUp = function(mechanicObject){
    if(mechanicObject.is_mechanic_object){
      this.events.push(mechanicObject);
    }else{
      throw new Error("Must Be a mechanic Object");
    }
  }

  //Krishna took elephants to Kuruksetra, thats how php started ..
  EventHorizon.prototype.waving = function(){
    if(this.events.length > 0){
      if(this.events.length > this.currentEventIndex){
        var ramayana_verse = this.events[this.currentEventIndex];
        if(ramayana_verse.started){
          ramayana_verse.ocurring();//sipping expresso at the cremation ground ...
          this.currentEventIndex ++;
        }else{
          this.events.splice(this.currentEventIndex,1);//the western sun is falling down on every one ...
          this.currentEventIndex --;
        }
        t
        this.waving();//king Bishma in a bed of arrows ...
      }else{
        this.currentEventIndex = 0;
      }
    }
  }

  return EventHorizon;
})();
Wo.Helper.EventHorizon = EventHorizon;
