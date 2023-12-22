function createClass(arr){

    class Cat {
       constructor(name, age){
        this.name = name;
        this.age = age;
       }

       meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
       }
    }

    for (let line of arr) {
        line = line.split(' ');
        let name = line[0];
        let age = Number(line[1]);

        let cat = new Cat(name, age);

        cat.meow()
    }
}
createClass(['Mellow 2', 'Tom 5'])