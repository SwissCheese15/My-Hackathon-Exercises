// Manuel, Exercise 39 -------------------------------------------------

happyOrNot = num => {

    arrayOfDigits = Array.from(String(num), Number);

    newArray = 0

    for (i = 0; i < arrayOfDigits.length; i++) {
        newArray += arrayOfDigits[i] * arrayOfDigits[i]
    }

    if (newArray === 1) {
        return 
    
    }

    else if (newArray === 4) {
        return
        }
    
    else (happyOrNot(newArray))

    return newArray === 1 ? true : false
    
}

console.log(happyOrNot(19)) // true
console.log(happyOrNot(11)) // false
console.log(happyOrNot(107)) // false
