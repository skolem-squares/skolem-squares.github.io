---
layout: page
title: ""
text: ""
permalink: /skolem_proof/
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_CHTML-full" type="text/javascript"></script>
<div class="math-wrap">
<p><strong>Problem Statement:</strong> For which <span class="math inline">\(n \in \mathbb{N}\)</span> is it possible to construct Skolem sequences?<br />
<strong>Introduction:</strong> A Skolem sequence of order <span class="math inline">\(n\)</span> is a permutation of the sequence: <span class="math inline">\(S = [1, 1, 2, 2, ... , n, n]\)</span>.<br />
Each number <span class="math inline">\(i = 1...n\)</span> appears twice in the sequence, the position of the first instance of <span class="math inline">\(i\)</span> we will call <span class="math inline">\(x_i\)</span> and the second <span class="math inline">\(y_i\)</span>.<br />
A Skolem sequence also has the property that each pair of numbers <span class="math inline">\(x_i\)</span> and <span class="math inline">\(y_i\)</span> are separated in position equal to their value, <span class="math inline">\(i\)</span>. That is, <span class="math inline">\(y_i = x_i + i\)</span>.<br />
<strong>Proof:</strong> Let S be a Skolem sequence, with the position of each number given as: <span class="math inline">\(P = [{x_1,y_1,x_2,y_2,...,x_n,y_n}] = [1, 2, ... , 2n]\)</span>.<br />
Consider the sum of positions <span class="math inline">\(x_i\)</span> and <span class="math inline">\(y_i\)</span> in the sequence Skolem sequence <span class="math inline">\(S\)</span>: <span class="math display">\[\sum P = \sum_{i=1}^{n} x_i + \sum_{i=1}^{n} y_i = 1 + 2 + ... + 2n\]</span></p>
<p>Since <span class="math inline">\(y_i = x_i + i\)</span>. we can rewrite the left side of the expression: <span class="math display">\[\sum_{i=1}^{n} x_i + \sum_{i=1}^{n} y_i = \sum_{i=1}^{n} x_i + \sum_{i=1}^{n} (x_i + i) = 2\sum_{i=1}^{n} x_i + \sum_{i=1}^{n} i\]</span></p>
<p>Now our expression can be written as: <span class="math display">\[2\sum_{i=1}^{n} x_i + \sum_{i=1}^{n} i  = 1 + 2 + ... + 2n\]</span></p>
<p>We can use the fact that the sum of numbers 1, 2, .. n = <span class="math inline">\(\frac{n(n+1)}{2}\)</span>. <span class="math display">\[2\sum_{i=1}^{n} x_i + \frac{n(n+1)}{2}  = \frac{2n(2n+1)}{2}\]</span></p>
<p>Next, let's rearrange terms to isolate the sum of the <span class="math inline">\(x_i\)</span>s. <span class="math display">\[\sum_{i=1}^{n} x_i = \frac{2n(2n+1) - n(n+1)}{4}\]</span></p>
<p>Multiplying out the right side of the expression we get a simplified equation: <span class="math display">\[\sum_{i=1}^{n} x_i = \frac{4n^2 + 2n - n^2 - n}{4} = \frac{3n^2 + n}{4}\]</span><br />
The <span class="math inline">\(\sum_{i=1}^{n} x_i\)</span> must be an integer, therefore so must <span class="math inline">\(\frac{3n^2 + n}{4}\)</span>. We can split the equation into separate cases by considering <span class="math inline">\(3n^2 + n \bmod{4}\)</span>.<br />
If <span class="math inline">\(n \bmod{4} = 0\)</span>, then <span class="math inline">\(n\)</span> is a multiple of 4 and so is <span class="math inline">\(3n^2 + n\)</span> since we can factor out a 4 from each term.<br />
If <span class="math inline">\(n \bmod{4} = 1\)</span>, then <span class="math inline">\(3n^2 + n = 3(1+4i)^2 + 1 + 4i = 12i^2 + 28i + 4\)</span> is also a multiple of 4.<br />
If <span class="math inline">\(n \bmod{4} = 2\)</span>, then <span class="math inline">\(3n^2 + n = 3(2+4i)^2 + 2 + 4i = 12i^2 + 52i + 14\)</span> is not divisible by 4.<br />
If <span class="math inline">\(n \bmod{4} = 3\)</span>, then <span class="math inline">\(3n^2 + n = 3(3+4i)^2 + 3 + 4i = 12i^2 + 76i + 30\)</span> is not divisible by 4.<br />
Finally, we can conclude that Skolem sequences only exist for <span class="math inline">\(n \bmod{4} = 0, 1\)</span>.</p>
</div>
