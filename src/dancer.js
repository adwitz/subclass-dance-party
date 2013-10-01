var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var dance = this;
  this.time = setTimeout(function(){ dance.step(); }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.stop = function(){
  clearTimeout(this.time);
};

Dancer.prototype.lineUp = function() {
  this.$node.stop().animate({top: 360, left: 440}, 100, function() {
  });
};