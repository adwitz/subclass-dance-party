var SlidyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("slider").removeClass("dancer");
  this.sliding = true;
  this.left = left;
  this.val = 1;
};

SlidyDancer.prototype = Object.create(Dancer.prototype);
SlidyDancer.prototype.constructor = SlidyDancer;

SlidyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  var that = this.$node;
  if(this.val === -1){
    this.$node.css("border-radius", "50%");
  }else{
    this.$node.css("border-radius", "20%");
  }
  that.toggleClass('slider1');
  this.val = (-1)*this.val;
};

SlidyDancer.prototype.stop = function(){
  Dancer.prototype.stop.apply(this);
  this.$node.stop(true, true);
};

SlidyDancer.prototype.lineUp = function() {
  this.$node.stop().animate({top: 900}, 100, function() {
  });
};