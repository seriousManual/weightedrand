var expect = require('chai').expect

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

var countRuns = 100000
var testMap = new Map()
for (var i = 0; i < countRuns; i++) {
    var rez = wr(todos)
    if (!testMap.has(rez)) {
        testMap.set(rez, 1)
    } else {
        testMap.set(rez, testMap.get(rez) + 1)
    }
}

expect(testMap.get(dishes) / countRuns * 100).to.be.above(9)
expect(testMap.get(dishes) / countRuns * 100).to.be.below(11)

expect(testMap.get(laundry) / countRuns * 100).to.be.above(9)
expect(testMap.get(laundry) / countRuns * 100).to.be.below(11)

expect(testMap.get(rubbish) / countRuns * 100).to.be.above(9)
expect(testMap.get(rubbish) / countRuns * 100).to.be.below(11)

expect(testMap.get(procrastinate) / countRuns * 100).to.be.above(69)
expect(testMap.get(procrastinate) / countRuns * 100).to.be.below(71)


expect(wr(new Map())).to.be.null
expect(wr(new Map([['foo', 1]]))).to.equal('foo')

console.log('kthxbye')