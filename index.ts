function weightedrand<T>(entriesMap: Map<T, number>) {
    const entries = Array.from(entriesMap.entries())

    let runningSum = 0
    const weightSum = entries.reduce((sum, [, weight]) => sum + weight, 0)
    const randomPointer = Math.random() * weightSum

    for (const [entry, weight] of entries) {
        runningSum = runningSum + weight

        if (randomPointer < runningSum) {
            return entry
        }
    }

    return undefined
}

export default weightedrand