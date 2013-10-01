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
  //var toggle = that.toggleClass('fatty');
  //toggle.toggleClass('flash');
  var expand = function(){
    setInterval(function(){
      if(flag == 1){
        flag = -1;
      } else {
        flag = 1;
      }
      that.animate({"width": '+='+(flag*200),
    "height": '+='+(flag*200),
    "left": "+="+(flag*50),
    "right": "+="+(flag*50)}, 300);
    }, 300);
    that.toggleClass('fatty');
  };
  expand();
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