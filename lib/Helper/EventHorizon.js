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

  EventHorizon.prototype.lineUp = function(callBack){
    if(typeof callBack == 'function'){
      this.events.push(callBack);
    }else{
      throw new Error("callBack must be a function.");
    }
  }

  EventHorizon.prototype.waving = function(){
    if(this.events.length > 0){
      if(this.events.length > this.currentEventIndex){
        var cb = this.events[this.currentEventIndex];
        cb();
        this.currentEventIndex ++;
      }else{
        this.currentEventIndex = 0;
      }
    }
  }

  return EventHorizon;
})();
Wo.Helper.EventHorizon = EventHorizon;
