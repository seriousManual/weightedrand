function weightedrand(entriesMap) {
    var entries = Array.from(entriesMap.entries())

    var choosenEntry = null
    var runningSum = 0
    var weightSum = entries.reduce((carry, value) => carry + value[1], 0)
    var randomPointer = Math.random() * weightSum

    entries
        .some(entry => {
            runningSum = runningSum + entry[1]

            if (randomPointer < runningSum) {
                choosenEntry = entry[0]
                return true
            }

            return false
        })

    return choosenEntry
}

module.exports = weightedrand
