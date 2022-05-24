// app/converter.js

exports.rgbToHex = function(red, green, blue) {
    var redHex   = red.toString(16);
    var greenHex = green.toString(16);
    var blueHex  = blue.toString(16);
    return pad(redHex) + pad(greenHex) + pad(blueHex);
};


function pad(hex) {
    if (hex.length == 2) {
        return hex;
    } else {
        return `0${hex}`;
    }
    
}
