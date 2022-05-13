var expect    = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {

    describe("RGB to Hex conversion", function() {

        // specification for RGB to HEX converter   
        it("converts the basic colors", function() {
            var whiteHex   = converter.rgbToHex(255, 255, 255);
            expect(whiteHex).to.equal("ffffff");
        });

    });
});