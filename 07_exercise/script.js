const reversNumber = (pNumber) => {
    let reversedNumber = pNumber >= 0 ? Number(String(pNumber).split("").reverse().join("")) : -1 * Number(String(pNumber * (-1)).split("").reverse().join(""))
    return reversedNumber
}

