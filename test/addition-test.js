'use strict';
require('should');
var addition = require('../js/addition').addition;
describe("additon", function() {
    it("the type which one and two should be number", function() {
        addition.getAddition(1, 2).should.be.a.Number;
    })
    it("one and two should be three", function() {
        addition.getAddition(1, 2).should.eql(3);
    });
    it("two and two should not be three", function() {
        addition.getAddition(2, 2).should.not.eql(3);
    });
});
