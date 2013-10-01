var TriDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('tri1').removeClass('dancer');
};

TriDancer.prototype = Object.create(Dancer.prototype);
TriDancer.prototype.constructor = TriDancer;

TriDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  this.$node.toggleClass('tri2');
};