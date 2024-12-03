# Detecting Cycles in Graphs

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

Used to get a better understanding of detecting cycles (I was trying to over complicate it):
https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

Was told to use sets instead of maps for single check:
https://www.w3schools.com/js/js_sets.asp


Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.
Since this is utilizing Dfs to iterate through each node (given that said node has not already been visited) and then determinining if there is a cycle by checking the visited nodes the complexity comes out to $\Theta(V + E)$