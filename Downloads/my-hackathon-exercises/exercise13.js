// Manuel, Exercise 13 -------------------------------------------------

arrayOfMultiples = (num, length) => {

    output = []

    for (i = 1; i <= length; i++) {
        output.push(num * i)
    }
    console.log(output)
}


arrayOfMultiples(7, 5)