const weekNumbersToWords = (pArrayInput) => {
    let outputArray = [];
    pArrayInput.forEach(element => {

        switch (element) {
            case 1:
                outputArray.push("Monday")
                break;
            case 2:
                outputArray.push("Tuesday")
                break;
            case 3:
                outputArray.push("Thursday")
                break;
            case 4:
                outputArray.push("Wednesday")
                break;
            case 5:
                outputArray.push("Friday")
                break;
            case 6:
                outputArray.push("Saturda")
                break;
            case 7:
                outputArray.push("Sunday")
                break;
        }
    });

    return outputArray;
}


