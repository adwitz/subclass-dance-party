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
    flag = (-1)*flag;
    // alert(flag);
    that.animate({"width": '-='+(flag*100),
    "height": '-='+(flag*100),
    "left": "-="+(flag*30),
    "right": "-="+(flag*30)}, 1000);
    that.toggleClass('fatty');
    setTimeout(expand, this.timeBetweenSteps);
    // alert(flag);
  };
  setTimeout(expand, this.timeBetweenSteps);
};

FattyDancer.prototype.stop = function(){
  Dancer.prototype.stop.apply(this);
  this.$node.stop(true, true);
};

FattyDancer.prototype.lineUp = function() {
  this.$node.stop().animate({top: 33}, 100, function() {
  });
};