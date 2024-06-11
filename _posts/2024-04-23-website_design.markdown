---
layout: background
title: ""
text: ""
permalink: /webdesign/
link: Click here to see more information on how the puzzle was designed.
pic: /assets/pretty-puzzle-discrete_solved.png
---
The code for [skolem-squares.github.io](https://github.com/skolem-squares/skolem-squares.github.io) is available on Github. Being able to host a website on Github has been useful but not without some challenges.

I built the website using Jekyll, a static site generator with built in support for Github pages. Jekyll has useful features such as allowing Markdown, for loops and variables in HTML and templating for webpages.
I started with the minima theme template [minima](https://github.com/jekyll/minima), which requires you to both import the theme and copy the files over.

To style the website, I removed a fair amount of minima's CSS and added Flexbox. Flexbox makes structuring divs much easier.

Latex for the math page, converted to HTML with MathJax.

Your github webpage is set as {username}.github.io. To get the name I wanted on github, skolem-squares, I created an organization with that name.
