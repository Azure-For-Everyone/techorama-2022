// app/size.js

function squareMeters(length, width){
    return length + width
}

exports.getSquares = function(length, width) {
    return squareMeters(length, width)
};

exports.getAres = function(length, width) {
    return squareMeters(length, width) / 100
};

exports.getHectares = function(length, width) {
    return squareMeters(length, width) / 1000;
};
