var Pointer, animationIn, animationOut, color, pressFeedback, rippleCircle;

Pointer = require('./Pointer.js').Pointer;


color = 'black';

animationIn = {
  curve: 'ease-out',
  time: .3
};

animationOut = {
  curve: 'ease-in',
  time: .2
};

pressFeedback = {};

rippleCircle = {};

exports.startRipple = function(event, layer) {
  var eventCoords;
  eventCoords = Pointer.offset(event, layer);
  if (pressFeedback.states) {
    pressFeedback.destroy();
    rippleCircle.destroy();
  }
  pressFeedback = new Layer({
    superLayer: this,
    name: 'pressFeedback',
    width: layer.width,
    height: layer.height,
    opacity: 0,
    backgroundColor: color
  });
  pressFeedback.states.add({
    pressed: {
      opacity: .1
    }
  });
  pressFeedback.states['switch']('pressed', animationIn);
  rippleCircle = new Layer({
    superLayer: this,
    name: 'rippleCircle',
    borderRadius: '50%',
    midX: eventCoords.x,
    midY: eventCoords.y,
    opacity: .06,
    backgroundColor: color
  });
  rippleCircle.states.add({
    pressed: {
      scale: layer.width / 60,
      opacity: 0
    }
  });
  rippleCircle.states['switch']('pressed', animationIn);
  return rippleCircle.on(Events.AnimationEnd, function() {
    return rippleCircle.destroy();
  });
};

exports.endRipple = function(event, layer) {
  pressFeedback.states['switch']('default', animationOut);
  return pressFeedback.on(Events.AnimationEnd, function() {
    pressFeedback.destroy();
    return rippleCircle.destroy();
  });
};

// ---
// generated by coffee-script 1.9.2
