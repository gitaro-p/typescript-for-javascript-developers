export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('カワウソくん', 6);
console.log(me);
