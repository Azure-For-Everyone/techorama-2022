var expect    = require("chai").expect;
var age = require("../app/age");

describe("Age Converter", function() {

    describe("Convert age to time", function() {

        it("24 years old in seconds", function() {
            let seconds = age.ageToSeconds(24)
            expect(seconds).to.equal(756864000);
        });

        it("31 years old in seconds", function() {
            let seconds = age.ageToSeconds(31)
            expect(seconds).to.equal(977616000);
        });
    });
});