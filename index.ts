function weightedrand<T>(entriesMap: Map<T, number>) {
    const entries = Array.from(entriesMap.entries())

    if (entries.length === 0) {
        return undefined
    }

    if (entries.length === 1) {
        return entries[0][0]
    }

    let runningSum = 0
    const weightSum = entries.reduce((sum, value) => sum + value[1], 0)
    const randomPointer = Math.random() * weightSum

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]

        runningSum = runningSum + entry[1]

        if (randomPointer < runningSum) {
            return entry[0]
        }
    }

    return undefined
}

export default weightedrand