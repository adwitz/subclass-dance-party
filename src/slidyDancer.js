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
    setInterval(function(){
      if(flag == 1){
        flag = -1;
      } else {
        flag = 1;
      }
      that.animate({left: "+="+(flag*10)}, 300);
    }, 300);
  };
  bounce();
};