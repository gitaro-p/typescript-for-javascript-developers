export {};

let name = 'Peko';

name = 'Poko';

let nickname = 'Peko' as const;
nickname = 'Peko';

let profile = {
  name: 'Pokomaru',
  height: 156
} as const;

// profile.name = 'Poko';
// profile.height = 160;
