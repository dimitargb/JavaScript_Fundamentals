function findValidNames(input){

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = input.match(pattern);
    console.log(validNames.join(' '));
}
findValidNames('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov')