export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('たろう');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('たろ');
console.log(meOsaka.name);

const mario = new English.Person('Mario', 'Jon', 'Jackson');
console.log(mario);
