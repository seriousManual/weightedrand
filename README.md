# WEIGHTEDRAND

weightedrand is a small library that allows for the weighted randomization of entries of a collection.
it utilizes ES6 Maps for a simple and comfortable declaration of weights.

## Installation
````
npm install weightedrand
````

## Usage
`weightedrand` exports one function that accepts exactly one argument, returning the choosen element synchronously.

````javascript
import weightedrand from 'weightedrand'

interface Todo {
    job: string
}

// possible elements where one should be retrieved from, determined by a supplied weight
const dishes = { job: 'do the dishes' }
const laundry = { job: 'do the laundry' }
const rubbish = { job: 'put the rubbish out' }
const procrastinate = { job: 'procrastinate' }

//the element-to-weight map
const todos = new Map<Todo, number>()
todos.set(dishes, 0.1)
todos.set(laundry, 0.1)
todos.set(rubbish, 0.1)
todos.set(procrastinate, 0.7)

const testMap = new Map()
for (let i = 0; i < 100000; i++) {
    const result = weightedrand(todos)
    if (!testMap.has(result)) {
        testMap.set(result, 1)
    } else {
        testMap.set(result, testMap.get(result) + 1)
    }
}

console.log(testMap)
````

Note that the result will be the exact same entry that has been provided in the weights map as a value.
Due to the ES6 Map support it is not necessary to rely on serialisation.

The weights supported as the values of the weight map are not subject to any restrictions, they can be below 1 or above and they do not have to add up to 1 (or 100) in sum.
In the above example the weights sum up to clarify the usage.

# License
The MIT License (MIT)

Copyright (c) 2016 Manuel Ernst

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
