export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Yuzu',
  age: 6
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'Mikan',
  age: 7
};

//friend.age++;

type Kawausokun<T> = {
  readonly [P in keyof T]: T[P];
};

type KawausokunSenyo = Kawausokun<Profile>;
