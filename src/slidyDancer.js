var SlidyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("slider").removeClass("dancer");
};

SlidyDancer.prototype = Object.create(Dancer.prototype);
SlidyDancer.prototype.constructor = SlidyDancer;

SlidyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  var that = this.$node;
  var flag = 1;
  var bounce = function(){
    setTimeout(function(){
      if(flag === 1){
        flag = -1;
      } else {
        flag = 1;
      }
      that.animate({left: "+="+(flag*10)}, 300);
    });
    //that.toggleClass('slider1');
  };
  bounce();
};

SlidyDancer.prototype.stop = function(){
  Dancer.prototype.stop.apply(this);
  //clearInterval(this.play);
  // var on = false;
  // this.play();
  //this.play();
  this.$node.stop(true, true);
};

SlidyDancer.prototype.lineUp = function() {
  this.$node.stop().animate({top: 900}, 100, function() {
  });
};