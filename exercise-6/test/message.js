var expect    = require("chai").expect;
var message = require("../app/message");

describe("Message validator", function() {
    it("Validate if message length is at least of size", function() {
        var length = message.countCharacters("Good morning techorama!")
        expect(length).to.above(10);
    });
    it("Validate if message length equals a size", function() {
        var length = message.countCharacters("Hey, I joined this amazing event at Techorama 2022, and played a cool game at the Microsoft booth. Guess what, I won a cool Surface Headphone. Oh man, I'm so happy now ;). I will get back next year for sure!")
        expect(length).to.eq(207);
    });
});