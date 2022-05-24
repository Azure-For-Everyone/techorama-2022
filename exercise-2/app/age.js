// app/age.js

const secondsInAYear = 31536000;

exports.ageToSeconds = function(years) {
    return secondsInAYear * years;
};