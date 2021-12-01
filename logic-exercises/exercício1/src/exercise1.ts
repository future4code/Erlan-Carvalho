const robbedHouses = (houses: number[]) => {
    for (let numbers of houses) {
        if (houses.indexOf(numbers)){
            console.log(houses[numbers])
        }
    }
}

robbedHouses([1,3,4,5])