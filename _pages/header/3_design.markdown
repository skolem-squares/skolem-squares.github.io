---
layout: page
title: "Design"
header: "true"
permalink: /design/
link: Click here to see more information on how the puzzle was designed.
pic: /assets/pretty-puzzle-discrete_solved.png

dropitems:
  - url: "/webdesign/"
    name: Website Design
  - url: "/puzzle_art/"
    name: Art
---
When designed Skolem squares, simplicity was my guiding philosophy. I was partly inspired by games like Go, Chinese Checkers and Chess, puzzles like Sudoku, Kakuro and 2048. I liked the idea that the puzzle would start with nothing more than black, blank spaces and empty, white spaces.

I considered and discarded other possibilities such as having arrows indicating a single direction for each number's partner, but that would require more complex rules.

My main concern was that I wouldn't be able to pack enough numbers into the Skolem square, that they'd be too sparse and mostly zeroes. I couldn't think of any other way to test if this would be the case other than building the Skolem squares.

To my relief, I've now generated Skolem Sequences that are over 90% non-zero entries, using techniques such as backtracking and weighted random number generators.
