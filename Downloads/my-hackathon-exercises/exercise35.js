// Manuel, Exercise 35 -------------------------------------------------

checkIP = IP => {

    let ipSeparate = (IP.split("."))

    let trueOrFalse = true

    for (i = 0; i < ipSeparate.length; i++) {

        let firstDigit = parseInt(ipSeparate[i][0])

        if (parseInt(ipSeparate[i]) > 255 || parseInt(ipSeparate[i][0] === 0)) {
            trueOrFalse = false
        }

        else if (firstDigit === 0 && parseInt(ipSeparate[i])) {
            trueOrFalse = false
        }
        
    }
    console.log(trueOrFalse)
    return trueOrFalse
}



checkIP("127.0.0.1") // true

checkIP("255.255.255.255") // true

checkIP("123.023.400.011") // false, cannot go further than 255

checkIP("123.090.020.011") // false, cannot start with a 0