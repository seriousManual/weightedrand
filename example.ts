import weightedrand from './index'

const dishes = {todo: 'do the dishes'}
const laundry = {todo: 'do the laundry'}
const rubbish = {todo: 'put the rubbish out'}
const procrastinate = {todo: 'procrastinate'}

const todos = new Map()
todos.set(dishes, 0.1)
todos.set(laundry, 0.1)
todos.set(rubbish, 0.1)
todos.set(procrastinate, 0.7)

const testMap = new Map()
for (let i = 0; i < 100000; i++) {
    const rez = weightedrand(todos)
    if (!testMap.has(rez)) {
        testMap.set(rez, 1)
    } else {
        testMap.set(rez, testMap.get(rez) + 1)
    }
}

console.log(testMap)