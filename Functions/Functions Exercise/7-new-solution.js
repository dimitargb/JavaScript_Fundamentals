function nxnMatrix(number) {
 
    let text = number.toString() + " "
    let result = text.repeat(number)
 
    for (let i = 0; i < number; i++) {
        console.log(result)
    }
}
nxnMatrix(3);