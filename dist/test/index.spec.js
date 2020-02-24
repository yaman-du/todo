"use strict";

var mocha = require("mocha");
var expect = require("chai").expect;
var app = require("../index");

describe("test av nånting", function () {

    it("test som kör ...", function () {
        expect(app).to.exist;
    });
});