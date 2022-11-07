// Manuel, Exercise 15 -------------------------------------------------

century = year => {

    let century = 0
    century = Math.floor(year /100 + 1)

    switch (century % 10) {

        case 1:
            console.log(century + "st century");
            break;
        case 2:
            console.log(century + "nd century");
            break;
        case 3:
            console.log(century + "rd century");
            break;
        default:
            console.log(century + "th century");
            break;
    }
}

century(999)
century(1001)
century(2105)