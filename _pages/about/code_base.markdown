---
layout: page
title: ""
text: ""
permalink: /projectcode/
link: Click here to see more information on how the puzzle was designed.
pic: /assets/pretty-puzzle-discrete_solved.png
group: "about"
back: "/webdesign/"
---
<div class="page-wrap-text">
Skolem squares is coded in python with some bash script automation. The Pandas package is used for storing and manipulation the puzzles. Visualizations are created using Matplotlib.

<center>Scripts:</center>
gen-puzzle.py: Main script that generates Skolem squares. For more information see the Puzzle Algorithm page.
solve-puzzle.py: Takes an unsolved puzzle and looks for all possible solutions to check for uniqueness.
get-puzzle-constraints.py: Finds all possible entries in the starting position of the puzzle. This helps me get a handle on the puzzle's difficulty, and will be developed further to solve puzzles via constraint propogation.
pretty-puzzle.py: Prints out the puzzles, either solved or unsolved and with or without colors. For more, see Puzzle Art page.

<center>Modules:</center>
puzzle.py: Class that stores the puzzle state and handles modifications such as adding and removing entries.
puzzle_factory.py: Class that takes an empty Puzzle object and tries to fill it with as many non-zero entries as possible.
puzzle_utils.py: Any other functions that take a Puzzle object as input.
puzzle_solver.py: Called from solve-puzzle.py to exhaustively search all possible puzzle solutions.
sequence_generator.py: Finds all possible skolem sequences of a given length with zero or more blanks at given positions.
puzzle_plots.py: Called from pretty-puzzle.py to print Skolem squares.
file_utils.py: Handles writing and reading Skolem Sqaures from disk.
logger.py: Logs important info, runtime, etc.
</div>
