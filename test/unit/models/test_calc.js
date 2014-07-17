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
      var distance = Calc.distance({x: -1, y: 3}, {x: 4, y: 15});
      expect(distance).to.equal(13);
    });
  });
});
