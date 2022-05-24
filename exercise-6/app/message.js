// app/message.js

exports.countCharacters = function(word) {
    let length = 0;
    console.log(word.length);
    for (let i = 0; i < word.length; i++) {
        length += i;
    }
    return word.length;
};

