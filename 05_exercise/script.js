const getLastValue = (pArray) => {
    pArray.sort()
    return pArray[pArray.length - 1]
}

//const input = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"]
//console.log(getLastValue(input))
// output is "Wednesday"