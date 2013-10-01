var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var dance = this;
  this.time = setTimeout(function(){ dance.step(); }, this.timeBetweenSteps);
  // this.interval = setInterval(function(){ dance.step(); }, this.timeBetweenSteps);
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
  // clearInterval(this.interval);
};
