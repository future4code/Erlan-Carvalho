const anagram = (s: string, t: string) => {

    if (s.split("").sort().join("") === t.split("").sort().join("")) {
        return true
    } else {
        return false
    }
}

console.log((anagram('cara', 'raça')))