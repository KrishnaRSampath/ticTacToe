ticTacToe
=========

Simple Tic Tac Toe Game – to be built using HTML/CSS/JS only

How I'm building it:
  1. Create a 3x3 grid of HTML5 canvases, each of which can be triggered by a JS click to draw an X or O.
  2. Check if three boxes in a row have a matching symbol (X or O), to determine gameOver
    a. Horizontal: check Boxes 1-2-3, 4-5-6, 7-8-9
    b. Vertical: check boxes 1-4-7, 2-5-8, 3-6-9
    c. Diagonal: check boxes 1-5-9, 3-5-7
  3. If gameOver, print "Player [X, O, 'Nobody'] wins! Try again."
