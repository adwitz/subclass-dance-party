var FattyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('thin').removeClass('dancer');
};

FattyDancer.prototype = Object.create(Dancer.prototype);
FattyDancer.prototype.constructor = FattyDancer;

FattyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  var that = this.$node;
  var flag = 1;
  var expand = function(){
    setTimeout(function(){
      if(flag === 1){
        flag = -1;
      } else {
        flag = 1;
      }
      that.animate({"width": '+='+(flag*50),
    "height": '+='+(flag*50),
    "left": "+="+(flag*30),
    "right": "+="+(flag*30)}, 300);
    }, 300);
    that.toggleClass('fatty').fadeToggle();
  };
  expand();
};