var expect    = require("chai").expect;
var size = require("../app/size");

describe("Get size of a land", function() {

    it("Calculate square meter", function() {
        let length = 500;
        let width = 100;
        let squareMeters   = size.getSquares(length,width)
        expect(squareMeters).to.equal(50000);
    });

    it("Calculate square ares", function() {
        let length = 300;
        let width = 400;
        let squareMeters   = size.getAres(length,width)
        expect(squareMeters).to.equal(1200);
    });

    it("Calculate square hectares", function() {
        let length = 220;
        let width = 900;
        let squareMeters   = size.getHectares(length,width)
        expect(squareMeters).to.equal(19.8);
    });
});