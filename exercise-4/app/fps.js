// app/fps.js

exports.getTotalFrames = function(durationInMinutes, fps) {
    var durationInSeconds = durationInMinutes * 60;
    return durationInSeconds * fps;
};