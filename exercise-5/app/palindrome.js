// app/palindrome.js

exports.isPalindrome = function(word) {
    var len = word.length;
    var mid = Math.floor(len/2);
    for ( var i = 0; i <= mid; i++ ) {
        if (word[i] !== word[len - i - 1]) {
            return false;
        }
    }
    return true;
};
