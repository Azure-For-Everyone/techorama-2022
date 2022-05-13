var expect    = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {

    describe("RGB to Hex conversion", function() {

        // specification for RGB to HEX converter   
        it("converts the white colors", function() {
            var whiteHex   = converter.rgbToHex(255, 255, 255);
            expect(whiteHex).to.equal("ffffff");
        });

        // specification for RGB to HEX converter   
        it("converts red, green and blue colors", function() {
            var redHex   = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex  = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });

    });
});