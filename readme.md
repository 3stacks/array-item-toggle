# Array Item Toggle

[![Build Status](https://travis-ci.org/3stacks/array-item-toggle.svg?branch=master)](https://travis-ci.org/3stacks/array-item-toggle)
[![Coverage Status](https://coveralls.io/repos/github/3stacks/array-item-toggle/badge.svg?branch=master)](https://coveralls.io/github/3stacks/array-item-toggle?branch=master)

A helper function to check if an item is:

- in an array -> remove it from the array,
- not in the array -> add it to the array

## Usage

```javascript
import toggle from 'array-item-toggle';

toggle([1, 2, 3], 1)

// returns a new array = [2, 3];

toggle([2, 3], 1)

// returns a new array = [2, 3, 1];

```