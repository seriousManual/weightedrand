# WEIGHTEDRAND [![Build Status](https://travis-ci.org/seriousManual/weightedrand.png)](https://travis-ci.org/seriousManual/weightedrand)

weightedrand is a small library that allows for the weighted randomization of entries of a collection.
it utilizes ES6 Maps for a simple and confortable declaration of weights.

## Installation
````
npm install weightedrand
````

## Usage
`weightedrand` exports one function that accepts exactly one argument, returning the choosen element synchronously.

````javascript
var assert = require('assert')
var weightedrand = require('weightedrand')

// possible elements where one should be retrieved from, determined by a supplied weight
var dishes = {todo: 'do the dishes'}
var laundry = {todo: 'do the laundry'}
var rubbish = {todo: 'put the rubbish out'}
var procrastinate = {todo: 'procrastinate'}

//the element-to-weight map
var todos = new Map()
todos.set(dishes, 0.1)
todos.set(laundry, 0.1)
todos.set(rubbish, 0.1)
todos.set(procrastinate, 0.7)

var result = weightedrand(todos)

assert(
       result === dishes            //probability of 10%
    || result === laundry           //probability of 10%
    || result === rubbish           //probability of 10%
    || result === procrastinate     //probability of 70%
)

console.log(result)
````

Note that the result will be the exact same entry that has been provided in the weights map as a value.
Due to the ES6 Map support it is not necessary to rely on serialisation.

The weights supported as the values of the weight map are not subject to any restrictions, they can by below 1 or above and they do not have to add up to 1 (or 100) in sum.
In the above example the weights sum up to clarify the usage.

# License
The MIT License (MIT)

Copyright (c) 2016 Manuel Ernst

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
