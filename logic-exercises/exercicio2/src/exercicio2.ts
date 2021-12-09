const solitaryNumber = (array: number[]) => {
    let count: {} | any = {}

    for (let i = 0; i < array.length; i++) {
        count[array[i]] = 1 + (count[array[i]] || 0)
    }
    return count
}

console.log(solitaryNumber([1, 1, 2, 3]))