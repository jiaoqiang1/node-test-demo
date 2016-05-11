'use strict';
require('should');
var readFile = require('../js/async-read').readFile;
var err = function(file, err) {
    describe("read " + file + " fail", function() {
        it(file + " is not existent", function(done) {
            done();
        });
    })

};

var success = function(file, data) {
    describe("read " + file + " success", function() {
        it(file + " is existent and the file content type should be string", function(done) {
            data.should.be.a.String;
            done();
        });
        it(file + " content should be GinMu", function(done) {
            data.should.eql("GinMu\n");
            done();
        });
    });
};

readFile.getContent("tests.txt", err, success);
readFile.getContent("test.txt", err, success);
