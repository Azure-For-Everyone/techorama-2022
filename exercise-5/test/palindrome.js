var expect    = require("chai").expect;
var palindrome = require("../app/palindrome");

describe("is palindrome", function() {
    it("very if racecar is a palindrome", function() {
        var isPalindrome = palindrome.isPalindrome("racecar")
        expect(isPalindrome).to.equal(false);
    });

    it("very if horse is a palindrome", function() {
        var isPalindrome = palindrome.isPalindrome("horse")
        expect(isPalindrome).to.equal(false);
    });
});