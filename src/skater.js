var SkateDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('skater').removeClass('dancer');
  this.$node.innerHTML = "<img src='/Users/hackreactor/code/adwitz/2013-09-subclass-dance-party/src/skates.jpg'>";
  this.counter = 0;
  this.left = left;
  this.top = top;
};

SkateDancer.prototype = Object.create(Dancer.prototype);
SkateDancer.prototype.constructor = SkateDancer;

SkateDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
};

SkateDancer.prototype.lineUp = function(){
  if (this.counter === 0){
    this.top = 10;
    this.left = 10;
  } else if (this.counter === 1){
    this.top = 10;
    this.left = 1850;
  } else if (this.counter === 2){
    this.top = 900;
    this.left = 1850;
  } else if (this.counter > 2){
    this.top = 900;
    this.left = 10;
  }
  if (this.counter >=3){
    this.counter = 0;
  } else {
    this.counter++;
  }
  //this.counter >= 3)? this.counter = 0 : this.counter++;
  this.$node.stop().animate({left: this.left, top: this.top});
};