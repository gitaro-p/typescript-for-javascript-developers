export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Tanaka';

  static work() {
    //  "Hey, guis! This is Taro! Are you interested in Typescript? Let's dive into Typescript!";
    return `Hey, guis! This is ${this.firstName}! Are you interested in Typescript? Let's dive into Typescript!`;
  }
}

// let me = new Me();
// console.log(me.isProgramer);
console.log(Me.isProgramer);
console.log(Me.work());
