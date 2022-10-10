// Manuel, Exercise 16 -------------------------------------------------

lovesMe = num => {

    let output = ""

    if (num === 1) {
         output += "LOVES ME"
    }

    else if (num === 2) {
        output += "Loves me, LOVES ME NOT"
    }

    else if (num % 2 === 0) {

        output += " Loves me, Loves me not ,".repeat((num -1)/2) + " Loves me, LOVES ME NOT"
        output = output.substring(1)
    }

    else {
        output += " Loves me, Loves me not ,".repeat((num -1)/2) + " LOVES ME"
        output = output.substring(1)
    }

    console.log(output)
}


lovesMe(5) // "Loves me, Loves me not, LOVES ME"
lovesMe(6) // "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"
lovesMe(1) // "LOVES ME"