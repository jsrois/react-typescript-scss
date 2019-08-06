export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("javi");

console.log(person);