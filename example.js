var wr = require('./')

var dishes = {todo: 'do the dishes'}
var laundry = {todo: 'do the laundry'}
var rubbish = {todo: 'put the rubbish out'}
var procrastinate = {todo: 'procrastinate'}

var todos = new Map()
todos.set(dishes, 0.1)
todos.set(laundry, 0.1)
todos.set(rubbish, 0.1)
todos.set(procrastinate, 0.7)

var testMap = new Map()
for (var i = 0; i < 100000; i++) {
    var rez = wr(todos)
    if (!testMap.has(rez)) {
        testMap.set(rez, 1)
    } else {
        testMap.set(rez, testMap.get(rez) + 1)
    }
}

console.log(testMap)