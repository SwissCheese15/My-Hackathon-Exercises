// Manuel, Exercise 12 -------------------------------------------------

wordCount = string => {
    if (string.split(" ").length <= 30) {
        console.log(string.split(" ").length)
    }
    else {
        let acceptedString = " "
        let wordArray = string.split(" ")
       
        
        for (i = 0; i <= 30; i++) {
            acceptedString += wordArray[i] + " "
            acceptedString
        }
        console.log("ERROR: you wrote " + string.split(" ").length + " words. We only can accept the following words: " + acceptedString)}
       
}       

wordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu")
wordCount("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupery")