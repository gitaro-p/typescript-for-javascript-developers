export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ error });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me!');

//never型は発生しえない値の型を表す。
