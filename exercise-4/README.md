# Exercise 4

Video is everywhere. Can you imagine a world without streaming, videos and social media? I can't. Over the years video and streaming has become part of our daily lifes but now also professional lifes. How many meetings did you participate during the last 2 COVID years? It's ridicilous. 

Next to that we have seen incremental expectations of video quality and rendering. High qualitiy video (and audio) are the new normal, that's why many engineers, open source developers have been working hard on developing more efficient encoders/decoders, telco providers to provide more relibable networks, and the list goes on.

An important factor of a video is ofcourse the framerate, which represents the frames which are displayed per second. The higher the framerate, the more fluent the video will appear for you. Next to that higher the framerate is the larger the video file is, but how large also depends on the encoder you are using.

Take the nostalgic movie: The Gladiator. This video takes about 2 hours and 35 minutes, rendering at 24 frames per seconds (FPS). How many frames does The Gladiator contain?

![Gladiator](../images/gladiator.jpg)

# The challenge

Within this project `app` folder you will find a `fps.js`. In this file you will find a function: `getTotalFrames`. This function will help you to calculate total frames within a video. Try running the `npm test` command in the terminal to see if the converter is working as expected.

# The problem

As you might have noticed, something is not working, and that is REALLY annoying. I bet something is going wrong in the `getTotalFrames` ;). Can you help solving this issue?