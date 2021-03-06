function weightedrand(entriesMap) {
    var entries = Array.from(entriesMap.entries())

    if (entries.length === 0) {
        return null
    }

    if (entries.length === 1) {
        return entries[0][0]
    }

    var runningSum = 0
    var weightSum = entries.reduce((sum, value) => sum + value[1], 0)
    var randomPointer = Math.random() * weightSum

    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i]

        runningSum = runningSum + entry[1]

        if (randomPointer < runningSum) {
            return entry[0]
        }
    }

    return null
}

module.exports = weightedrand