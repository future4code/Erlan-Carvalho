const sumOfTwo = (array: number[], target: number) => {

    for (let item of array) {
        if (item + item === target) {
            return [item]
        }
    }
}

console.log(sumOfTwo([2, 2, 3], 4))