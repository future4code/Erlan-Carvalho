const countNegativesNums = (arrayDeArrays: any[]) => {

    let count: any | {} = {}

    for (let i = 0; i < arrayDeArrays.length; i++) {
        if (arrayDeArrays[i] < 0) {
            return count
        }

    }
}

console.log(countNegativesNums([[-1, 2, 3, 4], [-3, -2, 0, 2]]))