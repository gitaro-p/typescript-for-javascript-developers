export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Pon', underTwenty: false };

// インデックスシグネチャ
// { [ index: typeForIndex ]:rtpeForValue}

profile.name = 'Pon';
profile.age = 35;
profile.nationality = 'Japan';
