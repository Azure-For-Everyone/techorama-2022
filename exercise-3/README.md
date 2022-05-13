# Exercise 1

When developing webapps or websites, we like to have a good looking and clean design. To achieve this, the concept of styling through CSS is an important aspect in creating a sleek user experience (UX). When styling on the web we can use different color formats such as RGB (Red Green Blue) colors and HEX (Hexadecimal) colors. RGB and HEX colors can be used alternately, which means that each RGB color can be represented as a HEX color and vice versa.

## An example: 

An RGB color is composed of a tripplet which contains values from 0 to 255. The color blue in RGB format looks like `[0,0,255]`, so a max value for the blue value. By playing with the range of each R,G,B component you can display any color you prefer.

The same RGB color can be represented in the HEX color equivalent. To convert a RGB color to a HEX color each R,G,B segment needs to be converted by a hexidecimal **with a leading 0** if only 1 character long. Converting the blue color `[0,0,255]` to hex color, as explained above, will look like `[00,00,ff]`. Once converted each segment is concatenated and prefix by a `#`. After doing this the official HEX color for blue will look like `#0000ff`.


# The challenge

Within this project `app` folder you will find a `converter.js`. In this file you will find a `rgbToHex` function that is responsible for transforming a RGB color to a HEX color. Try running the `npm test` command in the terminal to see if the converter is working as expected.

# The problem

As you might have noticed, something is not working, and that is REALLY annoying. I bet something is going wrong in the `pad` function, but not sure ;). Can you help solving this issue?