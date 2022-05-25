// app/message.js

exports.countCharacters = function(word) {
    let length = 0;
    for (let i = 0; i < word.length; i++) {
        length++
    }
    return length;
};

