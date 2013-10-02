var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function() {
  this.$node.stop().animate({left: 33}, 100, function() {
  });
};