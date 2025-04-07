import {expect} from 'chai'

import wr from './index'

const dishes = {todo: 'do the dishes'}
const laundry = {todo: 'do the laundry'}
const rubbish = {todo: 'put the rubbish out'}
const procrastinate = {todo: 'procrastinate'}

const todos = new Map()
todos.set(dishes, 0.1)
todos.set(laundry, 0.1)
todos.set(rubbish, 0.1)
todos.set(procrastinate, 0.7)

const countRuns = 100000
const testMap = new Map()
for (let i = 0; i < countRuns; i++) {
    const rez = wr(todos)
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


expect(wr(new Map())).to.be.undefined
expect(wr(new Map([['foo', 1]]))).to.equal('foo')

console.log('kthxbye')