function triples(n) {
    for (let i = 0; i <= (n - 1); i++) {
        let letter1 = String.fromCharCode(97 + i)

        for (let j = 0; j <= (n - 1); j++) {
            let letter2 = String.fromCharCode(97 + j)

            for (let k = 0; k <= (n - 1); k++) {
                let letter3 = String.fromCharCode(97 + k)
                let tripple = letter1 + letter2 + letter3
                console.log(tripple)
            }
        }
    }
}
triples('2')