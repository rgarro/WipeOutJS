/**
 * Automatic Recursive Mechanic Render Line Up
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


  EventHorizon.prototype.waving = function(){
    if(this.events.length > 0){
      if(this.events.length > this.currentEventIndex){
        var ramayana_verse = this.events[this.currentEventIndex];
        if(ramayana_verse.started){
          ramayana_verse.ocurring();
          this.currentEventIndex ++;
        }else{
          this.events.splice(this.currentEventIndex,1);
          this.currentEventIndex --;
        }
        this.waving();
      }else{
        this.currentEventIndex = 0;
      }
    }
  }

  return EventHorizon;
})();
Wo.Helper.EventHorizon = EventHorizon;
