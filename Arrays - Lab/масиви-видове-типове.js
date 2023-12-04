function solve(angel) {

    let students = ['pesho', 'ivan', 'gosho', 'stefan'];

    // changing element form arrey!
    students[3] = 'stefancho';
    console.log(students);

    // get the lenght of arrey!

    console.log(students.length);

    // get the last element of arrey!
    console.log(students[students.length - 1]);

    // push method - добавя елемент накрая на масива!
    students.push('gabi');
    console.log(students);

    // select element on invalis position!
    console.log(students[100]);

    // set element on none exsiting position!
    students[10] = 'Mitko'

    //methods : includes() - дали в масива има този елемент.
    console.log(students.includes('gosho'));

    //мethod: toString() - създава стринг - последвоателност от елементи свързани със запетайка!
    console.log(students.toString());

    // method join - присъединяване на елемените в масива като стринг!
    // Тук можем сами да определяме какъв да е сепаратора: ; или празно или + или -:    
    console.log(students.join('  '));
}
solve();
