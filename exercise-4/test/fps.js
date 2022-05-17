var expect    = require("chai").expect;
var fps = require("../app/fps");

describe("Video duration to number of frames", function() {
    it("Minutes of video to total frames", function() {
        var frames   = fps.getTotalFrames(155,24);
        expect(frames).to.equal(223200);
    });
});