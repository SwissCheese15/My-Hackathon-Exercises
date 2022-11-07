// Manuel, Exercise 19 -------------------------------------------------

getLength = input => {

    let array = input

    for (i = 0; i < array.length ; i++) {
        array = array.flat()
    }
    console.log(array.length)
}

getLength([1, [2, 3]]) // 3
getLength([1, [2, [3, 4]]]) // 4