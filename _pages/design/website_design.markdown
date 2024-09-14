---
layout: page
title: ""
text: ""
permalink: /webdesign/
link: Click here to see more information on how the puzzle was designed.
pic: /assets/pretty-puzzle-discrete_solved.png
---
The code for <a class="inline-link" href="{{ "https://github.com/skolem-squares/skolem-squares.github.io" | relative_url }}">{{ "skolem-squares.github.io" | escape }}</a> is available on Github. Being able to host a website on Github has been useful but not without challenges.

I built the website using Jekyll, a static site generator with built in support for Github pages. Jekyll has useful features such as allowing Markdown, for loops and variables in HTML. I started with Jekyll's minima theme template since it gave me a good starting point that was still very flexible.

To style the website, I removed a fair amount of the minima theme's CSS and added Flexbox. Flexbox makes it easier to control subdivisions of a website such that different components are aligned and distributed correctly. I also added a little javascript for underlining the current page, adding numbers to the Skolem squares on the Art page.

I typed up the math for the Math page in Latex. Then I used MathJax to convert the Latex to HTML.

Your github webpage url must be {username}.github.io. To get the name skolem-squares, I created a github organization with that name.
