// app/fps.js

exports.getTotalFrames = function(durationInMinutes, fps) {
    return durationInMinutes  *60 * fps;
};