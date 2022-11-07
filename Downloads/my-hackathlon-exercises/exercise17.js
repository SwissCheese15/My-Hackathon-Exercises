// Manuel, Exercise 17 -------------------------------------------------

whoIsThePresident = input => {

    if (input.length === 0) {
        console.log("Is it a democratic vote here ? Please vote again.")
    }

    else {

        let candidates = []

        let score = []

        for (i = 0; i < input.length; i++) {
            if(! candidates.includes(input[i])) {
                candidates.push(input[i])
                score.push(0)
            }
            
        }
        for (j = 0; j < candidates.length; j++) {
            for (z = 0; z < input.length; z++) {
                if (input[z] === candidates[j]) {
                    score[j] += 1
                }
        }
        }
    
    let max = Math.max(...score)

    let indexMax = score.indexOf(max)

    tie = 0

    score.forEach(element => {
        if (element === max) {
            tie += 1
        }
    });

    if (tie === 1) {
        console.log(candidates[indexMax] + " is our new president with " + max + " votes !") 
    }

    else {
        console.log("We got a draw ! Please vote again.")
    }

    }
}

whoIsThePresident([])
whoIsThePresident(["Teddy Bear", "Chewbacca", "Dracula", "Chewbacca"]); // Chewbacca is our new president with 2 votes !
whoIsThePresident(["Chewbacca", "Teddy Bear", "Dracula", "Chewbacca", "Dracula"]);