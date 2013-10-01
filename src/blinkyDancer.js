var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.prototype.step.apply(this, arguments);  
};

BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.$node.toggle();
};


