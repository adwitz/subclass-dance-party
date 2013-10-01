var SlidyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

SlidyDancer.prototype = Object.create(Dancer.prototype);
SlidyDancer.prototype.constructor = SlidyDancer;

SlidyDancer.prototype.step = function(){
  //console.log(this.step);
  Dancer.prototype.step.apply(this);
  var that = this.$node;
  that.animate({left: "$('body').height() * Math.random()"}, 'slow', function(){
    that.animate({left: '-250px'});
  });

};