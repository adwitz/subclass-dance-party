var FattyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('thin').removeClass('dancer');
};

FattyDancer.prototype = Object.create(Dancer.prototype);
FattyDancer.prototype.constructor = FattyDancer;

FattyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  var that = this.$node;
  that.toggleClass('fatty');
};

FattyDancer.prototype.stop = function(){
  Dancer.prototype.stop.apply(this);
  this.$node.stop(true, true);
};

FattyDancer.prototype.lineUp = function() {
  this.$node.stop().animate({top: 33}, 100, function() {
  });
};