var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

Dancer.prototype.step = function(timeBetweenSteps){
  var dance = this;
  setTimeout(function(){ dance.step(); }, timeBetweenSteps);
  console.log("Dancer Called");
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


