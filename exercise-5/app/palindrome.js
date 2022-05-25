// app/palindrome.js

exports.isPalindrome = function(word) {
    var len = word.length;
    var mid = Math.ceil(len/2);
    for ( var i = 0; i < mid; i++ ) {
        if (word[i] !== word[len - i]) {
            return false;
        }
    }
    return true;
};
