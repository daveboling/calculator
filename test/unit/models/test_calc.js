/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Calc = require('../../../app/models/calc');

describe('Calc', function() {
  describe('.add', function() {
    it('should add two numbers together', function(){
       var sum = Calc.add(2, 3);
       expect(sum).to.equal(5);
    });
  });

  describe('.subtract', function() {
    it('should subtract two numbers', function(){
        var subtract = Calc.subtract(2,3);
        expect(subtract).to.equal(-1);
    });
  });

  describe('.distance', function() {
    it('should calculate the distance between two points', function(){
      var distance = Calc.distance({x:-1, y:3}, {x:4, y:15});
      expect(distance).to.equal(13);
      distance = Calc.distance({x:0, y:4}, {x:-3, y:8});
      expect(distance).to.equal(5);
    });
    it('should calculate the distance between an array of points', function(){
      var distance = Calc.distance([{x:-1, y:3},{x:4, y:15},{x:-2, y:7}]);
      expect(distance).to.equal(23);
    });
  });

  describe('.slope', function(){
    it('should calculate the slope of a line', function(){
      var slope = Calc.slope({x:-1, y:-2}, {x:3, y:4});
      expect(slope).to.equal('y = 1.5x - 0.5');

      slope = Calc.slope({x:5, y:5}, {x:-5, y:-1});
      expect(slope).to.equal('y = 0.6x + 2');

     // slope = Calc.slope({x:1, y:-4}, {x:0, y:0});
     // expect(slope).to.equal('y = -4x');

     // slope = Calc.slope({x:1, y:1}, {x:0, y:0});
     // expect(slope).to.equal('y = x');

     // slope = Calc.slope({x:0, y:-2}, {x:2, y:-2});
     // expect(slope).to.equal('y = -2');

     // slope = Calc.slope({x:1, y:2}, {x:1, y:4});
     // expect(slope).to.equal('x = 1');

     // slope = Calc.slope({x:0, y:0}, {x:0, y:0});
     // expect(slope).to.equal('Error');
    });
  });

  describe('.mean', function(){
    it('should average an array of numbers', function(){
      var avg = Calc.mean([5,3,1,2,6,9,2]);
      expect(avg).to.equal(4);
    });
  });

  describe('.stdev', function(){
    it('should calculate the sample standard deviation of an array', function(){
      var stdev = Calc.stdev([3,0,-12,2,8,2]);
      expect(stdev).to.be.closeTo(6.6858, 0.0001);
    });
  });
  describe('.stdevp', function(){
    it('should calculate the population standared deviation of an array', function(){
      var stdevp = Calc.stdevp([3,0,-12,2,8,2]);
      expect(stdevp).to.be.closeTo(6.1033, 0.0001);
    });
  });
});

