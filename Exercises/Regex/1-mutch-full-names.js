function printFullNames(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    // let result = pattern.test(input);
    // console.log(result);

    let validNames = input.match(pattern);

    console.log(validNames.join(' '));

}
printFullNames(`Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov`)