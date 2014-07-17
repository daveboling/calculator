'use strict';

function Calc(){}

function round(number, precision){
  var e = Math.pow(10,precision);
  return Math.round(number * e) / e;
}

Calc.add = function(x,y){
  return x + y;
};

Calc.subtract = function(x,y){
  return x - y;
};

Calc.distance = function(p1, p2){
  if (p1.length){
    var tripTotal = 0;
    for(var i = 0; i < p1.length - 1; i++){
      tripTotal += Calc.distance(p1[i], p1[i+1]);
    }
    return tripTotal;
  } else {
    return Math.sqrt(Math.pow(p2.x-p1.x,2) + Math.pow(p2.y-p1.y,2));
  }
};

Calc.slope = function(p1, p2){
  var m = round( (p2.y - p1.y)/(p2.x - p1.x) , 1);
  var b = round( p1.y - m * p1.x , 1);
  var sign = b >= 0 ? '+' : '-';
  //var x = 'x ';

  b = Math.abs(b);

  if(m === 1){ m = ''; }
  if(b === 0){ b = ''; }

  return 'y = ' +
    m  + 'x '  +
    sign + ' ' +
    b;
};

//[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
//  return previousValue + currentValue;
//});

Calc.mean = function(array){
  return array.reduce(function(prev, current){
    return prev + current;
  }) / array.length;
};

Calc.stdevp = function(arr){
  var avg = Calc.mean(arr);
  var sqArr = [];

  for(var i = 0; i < arr.length; i++){
    sqArr.push(Math.pow(arr[i] - avg, 2));
  }

  return Math.sqrt(Calc.mean(sqArr));
}

Calc.stdev = function(arr){
  var avg = Calc.mean(arr);
  var sqArr = [];
  var newMean = 0;

  for(var i = 0; i < arr.length; i++){
    sqArr.push(Math.pow(arr[i] - avg, 2));
  }
  for(var k = 0; k < sqArr.length; k++){
    newMean += sqArr[k];
  }

  newMean =  newMean /( sqArr.length - 1);

  return Math.sqrt(newMean);
}

module.exports = Calc;

