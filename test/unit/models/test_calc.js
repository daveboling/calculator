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
});
