---
layout: page
title: "Skolem Math"
text: A Skolem sequence has the property that each integer (1, 2, 3 and so on), appears twice and the distance between each pair is the value of the integer. 
permalink: /langford_sequences/
pic: /assets/41134232.png
link: The mathematics of Skolem sequences and Langford sequences.
---
<div class="math-wrap">
<p>Skolem and Langford sequences were discovered independently by mathematicians Dudley Langford and Thoralf Skolem in 1957 and 1958. Langford was inspired by watching his kid play with colored blocks, observing that there was one block between the red blocks, two blocks between the blue blocks and three blocks between the green blocks:</p>
<img src="/assets/blocks.png">
<p>
Langford found sequences following this pattern for numbers: 4, 7, 8, 11, 12 and 15. However, he was unable to find sequences for 5, 6, 9 and 10. Langford’s problem asks the question for which <span class="math inline"><em>n</em></span> can Langford sequences be constructed.
Here are a few Langford sequences for <span class="math inline"><em>n</em> = 3, 4</span> and <span class="math inline">7</span>:
</p>
<p style="text-align: center;">
<span class="math inline">312132</span>, <span class="math inline">41312432</span>, <span class="math inline">45671415362732</span>
</p>
<p>
Skolem sequences are similar, indexing at 0 instead of 1 for the numbers separating each pair. Here are a few Skolem sequences for <span class="math inline"><em>n</em> = 4, 5</span> and <span class="math inline">8</span>:
</p>
<p style="text-align: center;">
<span class="math inline">41134232</span>, <span class="math inline">5113453242</span>, <span class="math inline">8113673485647252</span>
</p>
<p>
A pattern emerges, for both Skolem and Langford sequences if <span class="math inline"><em>n</em></span> is divisible by 4 then solutions exist. Langford sequences also appear to have solutions if after dividing <span class="math inline"><em>n</em></span> by 4 there is a remainder of 3 and Skolem sequences have solutions if the remainder is 1.
</p>
<p>
To solve Langford’s problem conclusively however, we need to show that this pattern will be true for any <span class="math inline"><em>n</em> ∈ ℕ</span>. <a href="https://skolem-squares.github.io/skolem_proof/">
Here is a solution for Skolem Sequences</a>. Langford sequences can be solved in a very similar manner.
</p>
<p style="text-align: center;">
<strong>Definition:</strong> Langford and Skolem sequences can both be generalized as follows:
Two of each number <span class="math inline"><em>S</em> = [1, 2...<em>n</em>]</span> with the property: <span class="math inline"><em>y</em><sub><em>i</em></sub> = <em>x</em><sub><em>i</em></sub> + <em>t</em><sub><em>i</em></sub></span> for <span class="math inline"><em>i</em> = 1, 2...<em>n</em>.</span>
Langford sequences: <span class="math inline"><em>y</em><sub><em>i</em></sub> = <em>x</em><sub><em>i</em></sub> + <em>i</em> + 1</span>, <span class="math inline"><em>S</em> = [1, 2...<em>n</em>]</span> and <span class="math inline"><em>i</em> = 2...<em>n</em> + 1</span>
Skolem sequences: <span class="math inline"><em>y</em><sub><em>i</em></sub> = <em>x</em><sub><em>i</em></sub> + <em>i</em></span>, <span class="math inline"><em>S</em> = [1, 2...<em>n</em>]</span> and <span class="math inline"><em>i</em> = 1, 2...<em>n</em></span>
</p>
<p>
In both cases we would say the Langford or Skolem sequence is order n and defect 1, meaning we start with 1 and the largest number is <span class="math inline"><em>n</em></span>.
</p>
<p>
We can even further generalize Langford and Skolem sequences in a couple ways.
For instance, hooked Skolem and Langford sequences allows zeroes or empty spots: <span class="math inline">41134030</span>
Additionally, we can have a Skolem or Langford sequence that contains only a subset of <span class="math inline">1, 2...<em>n</em></span> such as: <span class="math inline">75311357</span>
</p>
<p>
Skolem squares use both these properties, allowing 0s and a subset of <span class="math inline">1, 2..<em>n</em></span> in each row and column of the square.
</p>
</div>
