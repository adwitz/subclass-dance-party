var FattyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('thin').removeClass('dancer');
};

FattyDancer.prototype = Object.create(Dancer.prototype);
FattyDancer.prototype.constructor = FattyDancer;

FattyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  var that = this.$node;
  var toggle = that.toggleClass('fatty');
  toggle.toggleClass('flash');
  // var circleInflate = function(){
  //   that.animate({radius: 50}, 300, function(){
  //     circleDeflate();
  //   });
  // };
  // var circleDeflate = function(){
  //   that.animate({radius: 20}, 300, function(){
  //     circleInflate();
  //   });
  // };
  // circleInflate();
};