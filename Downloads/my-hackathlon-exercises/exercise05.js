// Manuel, Exercise 5 -------------------------------------------------

intersect = (rectOne, rectTwo) => {

    let x1 = rectOne[0][0] // left rect 1
    let x2 = rectOne[0][1] // top rect 1
    let x3 = rectOne[1][0] // right rect 1
    let x4 = rectOne[1][1] // bottom rect 1
    let y1 = rectTwo[0][0] // left rect 2
    let y2 = rectTwo[0][1] // top rect 2
    let y3 = rectTwo[1][0] // right rect 2
    let y4 = rectTwo[1][1] // bottom rect 2
    
        // Gives bottom-left point
        // of intersection rectangle
        var x5 = Math.max(x1, y1);
        var y5 = Math.max(x2, y2);

        // Gives top-right point
        // of intersection rectangle
        var x6 = Math.min(x3, y3);
        var y6 = Math.min(x4, y4);

        let overlap = [[x5,y5],[x6,y6]]

        console.log(overlap)
        return overlap
    
}

intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]); // => [2, 2], [4, 3]
intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]); // => [2, 1], [4, 4]
setInterval(console.log("hello"), 50)