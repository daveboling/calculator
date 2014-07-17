'use strict';

function Calc(){}

Calc.add = function(x,y){
  return x + y;
};

Calc.subtract = function(x,y){
  return x - y;
};

Calc.distance = function(point1, point2){
  var x1 = point1.x;
  var y1 = point1.y;

  var x2 = point2.x;
  var y2 = point2.y;

  return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
};

module.exports = Calc;
