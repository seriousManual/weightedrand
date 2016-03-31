function wr(entriesMap) {
    var weightSum = Array
        .from(entriesMap.values())
        .reduce((carry, value) => carry + value, 0)

    var choosenEntry = null
    var runningSum = 0
    var randomPointer = Math.random() * weightSum

    Array
        .from(entriesMap.entries())
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

module.exports = wr
