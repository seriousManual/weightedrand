import weightedrand from './index'

interface Todo {
    job: string
}

const dishes = { job: 'do the dishes' }
const laundry = { job: 'do the laundry' }
const rubbish = { job: 'put the rubbish out' }
const procrastinate = { job: 'procrastinate' }

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