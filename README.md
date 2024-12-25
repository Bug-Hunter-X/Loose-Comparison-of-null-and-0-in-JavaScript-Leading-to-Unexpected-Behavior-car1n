# Loose Comparison of null and 0 in JavaScript
This repository demonstrates a common, yet subtle bug in JavaScript related to the loose comparison of null and 0.  The `foo` function incorrectly treats 0 as null due to JavaScript's loose typing and comparison operators.

## Problem
The `foo` function in `bug.js` is intended to handle null values gracefully.  However, because of JavaScript's loose comparison (`==`), it mistakenly returns 0 when either `a` or `b` is 0, even though those are valid numerical inputs.

## Solution
The `bugSolution.js` file provides a corrected version of `foo` using strict equality (`===`).  This ensures that the function only returns 0 when `a` or `b` is explicitly null, not when they are 0.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` to see the buggy behavior.
4. Run `node bugSolution.js` to see the corrected output.